const { test, expect } = require('@playwright/test');
const { analyzeAccessibilityAndExportCSV } = require('../utils/a11yUtils');

const { ACCOUNT_URL } = require('../utils/urls');

test('account screen - profile tab', async ({ page }, testInfo) => {
  await page.goto(ACCOUNT_URL);
  await expect(page.locator('#your-profile')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('account screen - change password', async ({ page }, testInfo) => {
  await page.goto(ACCOUNT_URL);
  await page.locator('#selector__showChangePassword').click();
  await expect(page.locator('#oldpassword')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('account screen - change email', async ({ page }, testInfo) => {
  await page.goto(ACCOUNT_URL);
  await page.locator('#selector__showChangeEmail').click();
  await expect(page.locator('#oldpassword')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('account screen - personal settings', async ({ page }, testInfo) => {
  await page.goto(ACCOUNT_URL);
  await page.locator('#tab-your-personal-settings').click();
  await expect(page.locator('#your-personal-settings')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('account screen - personalized menus', async ({ page }, testInfo) => {
  await page.goto(ACCOUNT_URL);
  await page.locator('#tab-your-personal-menues').click();
  await expect(page.locator('#your-personal-menues')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('account screen - personalized menu entries', async ({ page }, testInfo) => {
  await page.goto(ACCOUNT_URL);
  await page.locator('#tab-your-personal-menueentries').click();
  await expect(page.locator('#your-personal-menueentries')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});