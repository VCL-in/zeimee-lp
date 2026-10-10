/*
 * Generate 1200x630 OG images from each column's rendered cover.
 * 1. npm run build && npx next start -p 3310
 * 2. PLAYWRIGHT=<path to playwright/index.mjs> node design/column-og/generate.mjs [id ...]
 * Writes public/images/column/<id>-og.png. Set coverImage in src/lib/columns.ts.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const { chromium } = await import(process.env.PLAYWRIGHT || "playwright");

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const base = process.env.BASE_URL || "http://localhost:3310";
const ids = process.argv.slice(2);
if (!ids.length || ids.some((id) => !/^\d{5}$/.test(id))) {
  throw new Error("Pass one or more five-digit article IDs.");
}

(async () => {
  const browser = await chromium.launch({ headless: true, channel: "chrome" });
  try {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 1200 },
      deviceScaleFactor: 2,
    });
    for (const id of ids) {
      const res = await page.goto(`${base}/column/${id}`);
      if (!res || res.status() !== 200) {
        throw new Error(`${id}: unexpected HTTP status ${res?.status()}`);
      }
      await page.evaluate(() => document.fonts.ready);
      const cover = page.locator('[class*="comparisonCover"]').first();
      const shot = await cover.screenshot();
      const target = path.join(root, `public/images/column/${id}-og.png`);
      await sharp(shot)
        .resize(1200, 630, { fit: "cover", position: "centre" })
        .png({ compressionLevel: 9 })
        .toFile(target);
      console.log(id, "->", path.relative(root, target));
    }
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
