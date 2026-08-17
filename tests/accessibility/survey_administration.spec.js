const { test, expect } = require('@playwright/test');
const { analyzeAccessibilityAndExportCSV } = require('../utils/a11yUtils');

const { NEW_SURVEY_URL, SURVEY_LIST_URL, SURVEY_GROUP_CREATE } = require('../utils/urls');

test('survey list tab', async ({ page }, testInfo) => {
  await page.goto(SURVEY_LIST_URL);
  await expect(page.locator('#survey-grid')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('survey groups tab', async ({ page }, testInfo) => {
  await page.goto(SURVEY_LIST_URL);
  await page.locator('[href="#surveygroups"]').click();
  await expect(page.locator('#surveygroups--gridview')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('survey groups create', async ({ page }, testInfo) => {
  await page.goto(SURVEY_GROUP_CREATE);
  await expect(page.locator('#SurveysGroups_name')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('survey list - actions menu', async ({ page }, testInfo) => {
  await page.goto(SURVEY_LIST_URL);
  await expect(page.locator('#survey-grid')).toBeVisible();
  await page.locator('[aria-label="Action Menu"]').first().click();
  await expect(page.locator('a').filter({ hasText: 'General settings' }).first()).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('create survey - custom admin', async ({ page }, testInfo) => {
  await page.goto(NEW_SURVEY_URL);
  await page.locator('#administrator_3_label').click()
  await expect(page.locator('#admin')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});