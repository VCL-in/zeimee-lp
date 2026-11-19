"use client";

import { useEffect } from "react";

type Point = [number, number];
type Shape = { hand: Point[]; end: Point; w: number; to: [number, number, number] };

// 1本の線。朱色のかすれた手描きの線が、途中からまっすぐな細い線になる。
const SHAPES: Record<string, (W: number, H: number) => Shape> = {
  stage: (W, H) => ({
    hand: [[-30, 0.86 * H], [0.14 * W, 0.7 * H], [0.3 * W, 0.84 * H], [0.46 * W, 0.74 * H]],
    end: [W + 30, 0.46 * H],
    w: Math.max(18, Math.min(40, W * 0.028)),
    to: [170, 166, 255],
  }),
  under: (W, H) => ({
    hand: [[2, 0.62 * H], [0.2 * W, 0.4 * H], [0.4 * W, 0.6 * H]],
    end: [W, 0.42 * H],
    w: 13,
    to: [83, 77, 255],
  }),
  contact: (W, H) => ({
    hand: [[-30, 0.93 * H], [0.12 * W, 0.8 * H], [0.26 * W, 0.9 * H], [0.4 * W, 0.8 * H]],
    end: [W + 30, 0.56 * H],
    w: Math.max(20, Math.min(40, W * 0.028)),
    to: [255, 255, 255],
  }),
};

function hash(a: number, b: number) {
  const x = Math.sin(a * 127.1 + b * 311.7) * 43758.5453;
  return x - Math.floor(x);
}
function noise(j: number, x: number) {
  const i = Math.floor(x);
  const f = x - i;
  const u = f * f * (3 - 2 * f);
  return hash(j, i) * (1 - u) + hash(j, i + 1) * u;
}
function smooth(a: number, b: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}
function spline(p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point {
  const t2 = t * t;
  const t3 = t2 * t;
  const at = (k: 0 | 1) =>
    0.5 *
    (2 * p1[k] +
      (-p0[k] + p2[k]) * t +
      (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2 +
      (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * t3);
  return [at(0), at(1)];
}

function drawStroke(canvas: HTMLCanvasElement) {
  const make = SHAPES[canvas.dataset.kind ?? ""];
  const g = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const W = rect.width;
  const H = rect.height;
  if (!make || !g || !W || !H) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(W * dpr);
  canvas.height = Math.round(H * dpr);
  g.setTransform(dpr, 0, 0, dpr, 0, 0);
  g.clearRect(0, 0, W, H);

  const shape = make(W, H);
  const hand = shape.hand;
  const n = hand.length;
  const J = hand[n - 1];
  const E = shape.end;
  // 手描きの部分はなめらかな曲線、その先は直線。つなぎ目で向きをそろえる。
  const dir: Point = [E[0] - J[0], E[1] - J[1]];
  const dl = Math.hypot(dir[0], dir[1]);
  const phantom: Point = [J[0] + (dir[0] / dl) * W * 0.18, J[1] + (dir[1] / dl) * W * 0.18];
  const P: Point[] = [[2 * hand[0][0] - hand[1][0], 2 * hand[0][1] - hand[1][1]], ...hand, phantom];
  const pts: Point[] = [];
  for (let i = 1; i < n; i++) {
    for (let k = 0; k < 70; k++) pts.push(spline(P[i - 1], P[i], P[i + 1], P[i + 2], k / 70));
  }
  const handCount = pts.length;
  const straight = Math.max(40, Math.round(dl / 6));
  for (let k = 0; k <= straight; k++) {
    pts.push([J[0] + (dir[0] * k) / straight, J[1] + (dir[1] * k) / straight]);
  }
  const L = [0];
  for (let i = 1; i < pts.length; i++) {
    L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  }
  const total = L[L.length - 1];
  const turn = L[handCount] / total;
  const bristles = Math.max(8, Math.round(shape.w / 1.25));
  const from = [229, 72, 45];
  const to = shape.to;

  const Q = pts.map((_, i) => {
    const t = L[i] / total;
    const a = pts[Math.max(0, i - 1)];
    const b = pts[Math.min(pts.length - 1, i + 1)];
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const d = Math.hypot(dx, dy) || 1;
    const rough = 1 - smooth(turn - 0.3, turn + 0.02, t);
    const w = (1.6 + (shape.w - 1.6) * rough) * Math.min(1, 0.35 + t / 0.04);
    const wobble = (noise(91, L[i] / 46) - 0.5) * shape.w * 0.34 * rough;
    return { t, x: pts[i][0] - (dy / d) * wobble, y: pts[i][1] + (dx / d) * wobble, nx: -dy / d, ny: dx / d, w, rough };
  });
  const color = (t: number, alpha: number) => {
    const m = smooth(turn - 0.34, turn + 0.06, t);
    const c = from.map((v, k) => Math.round(v + (to[k] - v) * m));
    return `rgba(${c[0]},${c[1]},${c[2]},${alpha.toFixed(3)})`;
  };

  g.lineCap = "round";
  for (let j = 0; j < bristles; j++) {
    const o = bristles > 1 ? (j / (bristles - 1)) * 2 - 1 : 0;
    const base = 0.5 + 0.45 * hash(j, 7);
    for (let i = 1; i < Q.length; i++) {
      const q = Q[i];
      const p = Q[i - 1];
      if (q.rough < 0.02) continue;
      // かすれ：線の端ほど、また手描きの終わりに近いほど、インクが切れる。
      const dry =
        0.1 + 0.52 * o * o + 0.3 * smooth(turn - 0.5, turn - 0.12, q.t) * q.rough + 0.28 * (1 - Math.min(1, q.t / 0.05));
      if (noise(j, L[i] / (22 + hash(j, 3) * 30)) < dry) continue;
      g.strokeStyle = color(q.t, base * (0.55 + 0.45 * q.rough));
      g.lineWidth = 1.5;
      g.beginPath();
      g.moveTo(p.x + (p.nx * o * p.w) / 2, p.y + (p.ny * o * p.w) / 2);
      g.lineTo(q.x + (q.nx * o * q.w) / 2, q.y + (q.ny * o * q.w) / 2);
      g.stroke();
    }
  }
  // 芯になる細い線。手描きの中では薄く、まっすぐな部分でははっきり出す。
  for (let i = 1; i < Q.length; i++) {
    const q = Q[i];
    const p = Q[i - 1];
    g.strokeStyle = color(q.t, 0.25 + 0.75 * (1 - q.rough));
    g.lineWidth = 1.6;
    g.beginPath();
    g.moveTo(p.x, p.y);
    g.lineTo(q.x, q.y);
    g.stroke();
  }
}

export function AdvisorEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".aia");
    if (!root) return;
    const canvases = [...root.querySelectorAll<HTMLCanvasElement>("canvas.aa-stroke")];
    const header = root.querySelector<HTMLElement>(".aa-header");
    const mobileCta = root.querySelector<HTMLElement>(".aa-mcta");
    const contact = root.querySelector<HTMLElement>("#contact");

    const paint = () => canvases.forEach(drawStroke);
    const onScroll = () => {
      header?.classList.toggle("aa-on", window.scrollY > 30);
      if (mobileCta && contact) {
        mobileCta.classList.toggle(
          "aa-show",
          window.scrollY > 600 && contact.getBoundingClientRect().top > window.innerHeight,
        );
      }
    };

    paint();
    onScroll();
    window.addEventListener("resize", paint);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", paint);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
