const { test, expect } = require('@playwright/test');
const { analyzeAccessibilityAndExportCSV } = require('../utils/a11yUtils');

const { DASHBOARD_URL } = require('../utils/urls');

test('dashboard screen - configuration sub menu open', async ({ page }, testInfo) => {
  await page.goto(DASHBOARD_URL);
  await page.locator('.mainmenu-dropdown-toggle').click();
  await expect(page.locator('#mainmenu-dropdown')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});