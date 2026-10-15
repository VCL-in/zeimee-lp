export const FLYER_CAMPAIGN = "202610_ai_advisor";
const STORAGE_KEY = "zeimee:flyer-variant";
type FlyerVariant = "A" | "B";

const contentByVariant = { A: "a_booking", B: "b_lp" } as const;

function landingVariant(): FlyerVariant | undefined {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const flyer = params.get("flyer");
  if (flyer === "A" || flyer === "B") return flyer;
  if (
    params.get("utm_source") !== "flyer" ||
    params.get("utm_campaign") !== FLYER_CAMPAIGN
  ) return;
  if (params.get("utm_content") === contentByVariant.A) return "A";
  if (params.get("utm_content") === contentByVariant.B) return "B";
}

export function getFlyerVariant(): FlyerVariant | undefined {
  const current = landingVariant();
  if (current) return current;
  if (typeof window === "undefined") return;
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    return stored === "A" || stored === "B" ? stored : undefined;
  } catch {
    return;
  }
}

export function captureFlyerLanding(): FlyerVariant | undefined {
  const variant = landingVariant();
  if (!variant) return;
  try {
    if (window.sessionStorage.getItem(STORAGE_KEY) === variant) return;
    window.sessionStorage.setItem(STORAGE_KEY, variant);
  } catch {}
  return variant;
}

export function flyerEventProperties() {
  const variant = getFlyerVariant();
  return variant ? { experiment: FLYER_CAMPAIGN, variant } : {};
}

export function documentThanksPath() {
  const variant = getFlyerVariant();
  if (!variant) return "/document/thanks";
  const params = new URLSearchParams({ flyer: variant });
  return `/document/thanks?${params}`;
}
