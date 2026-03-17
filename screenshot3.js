const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // Login
  await page.goto('https://zeimee.vercel.app/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.fill('input[type="email"], input[placeholder*="example"]', 'ryuuseimasyu@gmail.com');
  await page.fill('input[type="password"], input[placeholder*="パスワード"]', 'Masyuryuu2132');
  await page.click('button:has-text("ログイン")');
  await page.waitForTimeout(3000);
  await page.waitForLoadState('networkidle');

  const dir = '/Users/ryu/stitch-export/screenshots';

  // Close Getting Started checklist
  try {
    const closeBtn = page.locator('button:has-text("このチェックリストを非表示")');
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
      await page.waitForTimeout(1000);
    }
  } catch(e) {}

  // Also try the X button
  try {
    const xButtons = page.locator('text="Getting Started"').locator('xpath=..').locator('button');
    const count = await xButtons.count();
    for (let i = 0; i < count; i++) {
      if (await xButtons.nth(i).isVisible()) {
        await xButtons.nth(i).click();
        await page.waitForTimeout(500);
        break;
      }
    }
  } catch(e) {}

  await page.waitForTimeout(1000);

  // Dashboard - no checklist
  await page.screenshot({ path: `${dir}/final-dashboard.png` });
  console.log('Dashboard done');

  // Review page
  await page.goto('https://zeimee.vercel.app/journals/review', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${dir}/final-review.png` });
  console.log('Review done');

  // Focus mode
  try {
    const focusBtn = page.locator('text="フォーカス"');
    if (await focusBtn.isVisible()) {
      await focusBtn.click();
      await page.waitForTimeout(2000);
      await page.screenshot({ path: `${dir}/final-focus.png` });
      console.log('Focus done');
    }
  } catch(e) {}

  // Monthly check
  await page.goto('https://zeimee.vercel.app/monthly-check', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${dir}/final-monthly.png` });
  console.log('Monthly done');

  await browser.close();
  console.log('All done!');
})();
