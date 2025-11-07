"use client";

import type { CSSProperties } from "react";

type Props = {
  className?: string;
  /** CSS height value (clamp/px/rem). Defaults to ~80–170px responsive */
  height?: string;
  /** Slight color tint strength 0 (none)–0.45 (max) */
  tint?: number;
};

/**
 * SectionBottomScrim overlays the bottom slice of a section with frosted glass.
 * Ensure parent section has `relative` so this can anchor to the bottom.
 */
export function SectionBottomScrim({ className, height = "clamp(5rem, 14vw, 11rem)", tint = 0.25 }: Props) {
  const t = Math.max(0, Math.min(0.45, tint));
  const wrapperStyle: CSSProperties = { height };
  const blurStyle: CSSProperties = {
    background: `linear-gradient(0deg, rgba(6,10,27,${t + 0.25}) 0%, rgba(7,11,30,${t}) 55%, rgba(7,11,30,0) 100%)`,
  };

  return (
    <div aria-hidden className={["section-scrim", className || ""].join(" ")} style={wrapperStyle}>
      <span className="section-scrim__blur" style={blurStyle} />
      <span className="section-scrim__glow" />
    </div>
  );
}
