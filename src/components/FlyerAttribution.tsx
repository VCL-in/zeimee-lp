"use client";

import { useEffect, useRef } from "react";
import { inject, track } from "@vercel/analytics";
import { captureFlyerLanding, FLYER_CAMPAIGN } from "@/lib/flyer-experiment";

export function FlyerAttribution() {
  const captured = useRef(false);
  useEffect(() => {
    if (captured.current) return;
    captured.current = true;
    const variant = captureFlyerLanding();
    if (variant) {
      // Next's analytics boundary can hydrate later; initialize its deduplicated
      // queue before emitting the first landing event.
      inject();
      track("flyer_landing", { experiment: FLYER_CAMPAIGN, variant });
    }
  }, []);
  return null;
}
