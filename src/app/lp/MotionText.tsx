import type { CSSProperties } from "react";

/** Keep the readable sentence in the accessibility tree, independently of its glyph animation. */
export function MotionText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`motion-text ${className}`}>
      <span className="sr-only">{text}</span>
      <span className="glyphs" aria-hidden="true">
        {Array.from(text).map((char, index) => (
          <span
            className="glyph"
            key={index}
            style={{ "--char": index } as CSSProperties}
          >
            {char === " " ? "\u00a0" : char}
          </span>
        ))}
      </span>
    </span>
  );
}
