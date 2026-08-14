const { test, expect } = require('@playwright/test');
const { analyzeAccessibilityAndExportCSV } = require('../utils/a11yUtils');

const { LOGIN_URL, FORGOT_URL } = require('../utils/urls');

test.use({ storageState: { cookies: [], origins: [] } });

test('login screen - language dropdown open', async ({ page }, testInfo) => {
  await page.goto(LOGIN_URL);
  await page.locator('#language-selector .select2-selection').click();
  await expect(page.locator('.select2-dropdown')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('login screen - invalid credentials', async ({ page }, testInfo) => {
  await page.goto(LOGIN_URL);
  await page.fill('#user', 'invalid_user_that_does_not_exist');
  await page.fill('#password', 'wrong_password_123!');
  await page.click('button[name="login_submit"]');
  await expect(page.locator('.alert-danger')).toBeVisible();

  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('forgot password screen', async ({ page }, testInfo) => {
  await page.goto(FORGOT_URL);
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('forgot password screen - notification', async ({ page }, testInfo) => {
  await page.goto(FORGOT_URL);
  await page.fill('#user', 'nobody_at_all');
  await page.fill('#email', 'nobody_at_all@example.com');
  await page.click('input[type="submit"]');
  await expect(page.locator('.alert-success')).toBeVisible();

  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});
