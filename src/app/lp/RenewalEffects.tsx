"use client";

import { useEffect } from "react";

// ヘッダーの下線、スマホの下に出す申し込みボタンの出し入れ、一番上の背景の動画の読み込み。
export function RenewalEffects() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".aia");
    if (!root) return;
    const header = root.querySelector<HTMLElement>(".aa-header");
    const mobileCta = root.querySelector<HTMLElement>(".aa-mcta");
    const contact = root.querySelector<HTMLElement>("#contact");

    const onScroll = () => {
      // 一番上の動画を抜けたら、ヘッダーを白地に切り替える。
      header?.classList.toggle("aa-on", window.scrollY > window.innerHeight - 90);
      if (mobileCta && contact) {
        mobileCta.classList.toggle(
          "aa-show",
          window.scrollY > 600 && contact.getBoundingClientRect().top > window.innerHeight,
        );
      }
    };

    // 背景の動画は、動きを減らす設定の人と、通信を節約する設定の人には読み込まない（静止画のまま）。
    const video = root.querySelector<HTMLVideoElement>("video.aa-vid");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData =
      (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;
    if (video && video.dataset.src && !reduced && !saveData) {
      video.addEventListener("playing", () => video.classList.add("aa-ready"), { once: true });
      video.src = video.dataset.src;
      video.play().catch(() => {});
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
