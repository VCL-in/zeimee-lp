import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import {
  captureFlyerLanding,
  documentThanksPath,
  FLYER_CAMPAIGN,
  flyerEventProperties,
  getFlyerVariant,
} from "../src/lib/flyer-experiment.ts";

function browser(content, { denied = false, campaign = FLYER_CAMPAIGN } = {}) {
  const values = new Map();
  globalThis.window = {
    location: { search: `?utm_source=flyer&utm_campaign=${campaign}&utm_content=${content}` },
    sessionStorage: {
      getItem(key) {
        if (denied) throw new Error("Storage unavailable");
        return values.get(key) ?? null;
      },
      setItem(key, value) {
        if (denied) throw new Error("Storage unavailable");
        values.set(key, value);
      },
    },
  };
  return globalThis.window;
}

afterEach(() => { delete globalThis.window; });

test("SSR and ordinary visitors keep the untagged completion path", () => {
  assert.equal(getFlyerVariant(), undefined);
  assert.equal(documentThanksPath(), "/document/thanks");
  assert.deepEqual(flyerEventProperties(), {});
});

test("only the known flyer campaign and variant are accepted", () => {
  browser("a_booking", { campaign: "unrelated" });
  assert.equal(captureFlyerLanding(), undefined);
  browser("unexpected");
  assert.equal(captureFlyerLanding(), undefined);
  assert.deepEqual(flyerEventProperties(), {});
});

test("A survives navigation and reports no personal data", () => {
  const page = browser("a_booking");
  assert.equal(captureFlyerLanding(), "A");
  page.location.search = "";
  assert.equal(getFlyerVariant(), "A");
  assert.deepEqual(flyerEventProperties(), { experiment: FLYER_CAMPAIGN, variant: "A" });
});

test("B remains B after LP submission reaches the booking page", () => {
  const page = browser("b_lp");
  captureFlyerLanding();
  page.location.search = "";
  const destination = new URL(documentThanksPath(), "https://zeimee.com");
  assert.equal(destination.pathname, "/document/thanks");
  assert.equal(destination.searchParams.get("flyer"), "B");
  page.location.search = destination.search;
  assert.equal(getFlyerVariant(), "B");
  assert.equal(flyerEventProperties().variant, "B");
});

test("reloading the same edition does not count another landing in that session", () => {
  browser("a_booking");
  assert.equal(captureFlyerLanding(), "A");
  assert.equal(captureFlyerLanding(), undefined);
  assert.equal(getFlyerVariant(), "A");
});

test("blocked storage still preserves the tagged form redirect", () => {
  browser("b_lp", { denied: true });
  assert.equal(captureFlyerLanding(), "B");
  assert.equal(getFlyerVariant(), "B");
  assert.equal(new URL(documentThanksPath(), "https://zeimee.com").searchParams.get("flyer"), "B");
});

test("short QR markers identify either edition without a dense tracking URL", () => {
  const page = browser("unused");
  page.location.search = "?flyer=A";
  assert.equal(captureFlyerLanding(), "A");
  assert.equal(documentThanksPath(), "/document/thanks?flyer=A");
  page.location.search = "?flyer=B";
  assert.equal(captureFlyerLanding(), "B");
  assert.equal(documentThanksPath(), "/document/thanks?flyer=B");
});
