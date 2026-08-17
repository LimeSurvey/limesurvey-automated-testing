const { test, expect } = require('@playwright/test');
const { analyzeAccessibilityAndExportCSV } = require('../utils/a11yUtils');

const { DASHBOARD_URL } = require('../utils/urls');

test('dashboard screen - list widget, configuration sub menu open', async ({ page }, testInfo) => {
  await page.goto(`${DASHBOARD_URL}?viewtype=list-widget`);
  await page.locator('.mainmenu-dropdown-toggle').click();
  await expect(page.locator('#mainmenu-dropdown')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('dashboard screen - box widget', async ({ page }, testInfo) => {
  await page.goto(`${DASHBOARD_URL}?viewtype=box-widget`);
  await expect(page.locator('#survey_active')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('dashboard screen - admin notifications', async ({ page }, testInfo) => {
  await page.goto(DASHBOARD_URL);
  await page.locator('#admin-notifications-menu-button').click();
  await expect(page.locator('#notification-clear-all')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('dashboard screen - editor version', async ({ page }, testInfo) => {
  await page.goto(DASHBOARD_URL);
  await page.locator('a').filter({ hasText: 'admin' }).click();
  await page.locator('#feature-preview-button').click();
  await expect(page.locator('#activate_editor')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('dashboard screen - new survey menu', async ({ page }, testInfo) => {
  await page.goto(DASHBOARD_URL);
  await page.locator('#createMenuButton').click();
  await expect(page.locator('#create-survey-link')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('dashboard screen - copy survey modal', async ({ page }, testInfo) => {
  await page.goto(DASHBOARD_URL);
  await page.locator('[data-bs-target="#copySurvey_modal"]').click();
  await expect(page.locator('#copySurvey_modal')).toBeVisible();
  await page.locator('[data-bs-target="#copySurveyAdvanced"]').click();
  await expect(page.locator('#copySurveyAdvanced')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('dashboard screen - import survey modal', async ({ page }, testInfo) => {
  await page.goto(DASHBOARD_URL);
  await page.locator('#createMenuButton').click();
  await page.locator('[data-bs-target="#importSurvey_modal"]').click();
  await expect(page.locator('#importSurvey_modal')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('dashboard screen - floating actions bar - export survey modal', async ({ page }, testInfo) => {
  await page.goto(`${DASHBOARD_URL}?viewtype=list-widget`);
  await page.locator('#sid_0').check();
  await page.locator('button[data-bs-toggle="dropdown"]').filter({ hasText: 'Export' }).click();
  await page.getByRole('link', { name: 'Survey structure (*.lss)' }).click();
  await expect(page.locator('#floating-actions-modal-survey-grid-export-d2_1')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('dashboard screen - floating actions bar - set survey group', async ({ page }, testInfo) => {
  await page.goto(`${DASHBOARD_URL}?viewtype=list-widget`);
  await page.locator('#sid_0').check();
  await page.locator('button[data-action="updateSurveygroup"]').click();
  await expect(page.locator('#floating-actions-modal-survey-grid-updateSurveygroup-1')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('dashboard screen - floating actions bar - set survey theme', async ({ page }, testInfo) => {
  await page.goto(`${DASHBOARD_URL}?viewtype=list-widget`);
  await page.locator('#sid_0').check();
  await page.locator('button[data-action="updateTheme"]').click();
  await expect(page.locator('#floating-actions-modal-survey-grid-updateTheme-0')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});

test('dashboard screen - floating actions bar - delete surveys', async ({ page }, testInfo) => {
  await page.goto(`${DASHBOARD_URL}?viewtype=list-widget`);
  await page.locator('#sid_0').check();
  await page.locator('button[data-action="delete"]').click();
  await expect(page.locator('#floating-actions-modal-survey-grid-delete-4')).toBeVisible();
  const results = await analyzeAccessibilityAndExportCSV(page, testInfo.outputDir);
  expect(results.violations).toEqual([]);
});





