import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

const fontFamily = "'LINE Seed JP'";
const slideWidth = 1500;
const slideHeight = 760;
const slideStep = 1620;

const slides = [
  {
    src: "/lp/hero-screen-todo.png",
    prompt: "AIが並べたToDoを、上からレビュー。",
  },
  {
    src: "/lp/hero-screen-message.png",
    prompt: "不足証憑は、AIが顧問先へ依頼文を作成。",
  },
  {
    src: "/lp/hero-screen-review.png",
    prompt: "仕訳候補は、レビューして承認するだけ。",
  },
];

function smooth(frame: number, input: [number, number], output: [number, number]) {
  return interpolate(frame, input, output, {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function rangeOpacity(frame: number, start: number, end: number, fade = 28) {
  const intro = interpolate(frame, [start, start + fade], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const outro = interpolate(frame, [end - fade, end], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return Math.min(intro, outro);
}

function BrandMark() {
  return (
    <div
      style={{
        position: "absolute",
        left: 80,
        top: 64,
        display: "flex",
        alignItems: "center",
        gap: 14,
        color: "#f8fbff",
        fontFamily,
        fontSize: 25,
        fontWeight: 900,
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 5,
        }}
      >
        {[0, 1, 2, 3].map((item) => (
          <div key={item} style={{ background: "#f8fbff", borderRadius: 2 }} />
        ))}
      </div>
      Zeimee
    </div>
  );
}

function Background() {
  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at 18% 16%, rgba(31, 94, 255, 0.34), transparent 28%), radial-gradient(circle at 78% 18%, rgba(42, 213, 255, 0.22), transparent 30%), linear-gradient(135deg, #040817 0%, #07162c 44%, #0a2542 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0) 42%, rgba(255,255,255,0.04))",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,0.9), transparent 72%)",
        }}
      />
    </AbsoluteFill>
  );
}

function PromptPill() {
  const frame = useCurrentFrame();
  const prompts = [
    { text: slides[0].prompt, start: 0, end: 300 },
    { text: slides[1].prompt, start: 300, end: 600 },
    { text: slides[2].prompt, start: 600, end: 900 },
  ];

  return (
    <>
      {prompts.map((prompt) => (
        <div
          key={prompt.text}
          style={{
            position: "absolute",
            left: 310,
            right: 310,
            top: 126,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f8fbff",
            fontFamily,
            fontSize: 50,
            lineHeight: 1.18,
            fontWeight: 900,
            letterSpacing: 0,
            opacity: rangeOpacity(frame, prompt.start, prompt.end, 30),
            transform: `translateY(${smooth(frame, [prompt.start, prompt.start + 40], [14, 0])}px)`,
            textShadow: "0 18px 48px rgba(0, 0, 0, 0.34)",
          }}
        >
          {prompt.text}
        </div>
      ))}
    </>
  );
}

function SlidePanel({
  slide,
  index,
}: {
  slide: (typeof slides)[number];
  index: number;
}) {
  const frame = useCurrentFrame();
  const distanceFromActive = Math.abs(index * 300 - frame);
  const glow = interpolate(distanceFromActive, [0, 180, 300], [1, 0.45, 0.22], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: index * slideStep,
        top: 0,
        width: slideWidth,
        height: slideHeight,
        borderRadius: 30,
        background: "#f8fbff",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.55)",
        boxShadow: `0 34px 110px rgba(0, 0, 0, ${0.2 + glow * 0.18})`,
        transform: `scale(${0.985 + glow * 0.025})`,
      }}
    >
      <Img
        src={staticFile(slide.src)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top left",
        }}
      />
    </div>
  );
}

function UiCarousel() {
  const frame = useCurrentFrame();
  const trackX = interpolate(
    frame,
    [0, 250, 300, 550, 600, 850, 900],
    [0, 0, -slideStep, -slideStep, -slideStep * 2, -slideStep * 2, -slideStep * 3],
    {
      easing: Easing.bezier(0.76, 0, 0.24, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <div
      style={{
        position: "absolute",
        left: 210,
        top: 296,
        width: slideWidth,
        height: slideHeight,
        overflow: "visible",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: trackX,
          top: 0,
          width: slideStep * 4,
          height: slideHeight,
          display: "flex",
          gap: slideStep - slideWidth,
        }}
      >
        {[...slides, slides[0]].map((slide, index) => (
          <SlidePanel key={`${slide.src}-${index}`} slide={slide} index={index} />
        ))}
      </div>
    </div>
  );
}

export function HeroUiFlow() {
  return (
    <AbsoluteFill>
      <Background />
      <BrandMark />
      <PromptPill />
      <UiCarousel />
    </AbsoluteFill>
  );
}
