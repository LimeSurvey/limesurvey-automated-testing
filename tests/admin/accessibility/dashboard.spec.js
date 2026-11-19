import { expect, test } from '../../../src/fixtures/index.js';
import { scanAccessibility, summarizeViolations } from '../../../src/utils/accessibility.js';

test.describe('Accessibility: dashboard', { tag: ['@admin', '@a11y'] }, () => {
  // Application bug (LimeSurvey 7.10.0, verified 2026-11-16), every screen fails color-contrast, plus:
  //   link-name: list-view title links of surveys without a title render as empty <a>
  //   list: Configuration mega-menu columns and #notification-outer-ul contain non-<li> children
  //   target-size: box-view status links (`a.survey-state`) are smaller than 24px
  // Issue: TODO link once filed. Remove this line when fixed; do not relax the assertions.
  test.fixme();

  test('list view with the configuration menu open has no WCAG A/AA violations', async ({
    page,
    dashboardPage,
  }, testInfo) => {
    await dashboardPage.goto({ viewType: 'list-widget' });
    await dashboardPage.navbar.openConfigurationMenu();
    await expect(dashboardPage.navbar.configurationMenu).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('box view has no WCAG A/AA violations', async ({ page, survey: _survey, dashboardPage }, testInfo) => {
    await dashboardPage.goto({ viewType: 'box-widget' });
    await expect(dashboardPage.statusFilter).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('notifications menu has no WCAG A/AA violations', async ({ page, dashboardPage }, testInfo) => {
    // The notifications button only renders when the admin has at least one notification;
    // a superadmin on a non-SSL instance always has the "SSL not enforced" one.
    await dashboardPage.goto();
    await dashboardPage.navbar.openNotifications();
    await expect(dashboardPage.navbar.clearAllNotificationsItem).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('editor version dialog has no WCAG A/AA violations', async ({ page, dashboardPage }, testInfo) => {
    await dashboardPage.goto();
    await dashboardPage.navbar.openEditorVersionDialog();
    await expect(dashboardPage.navbar.editorVersionDialog).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('create survey menu has no WCAG A/AA violations', async ({ page, dashboardPage }, testInfo) => {
    await dashboardPage.goto();
    await dashboardPage.navbar.openCreateMenu();
    await expect(dashboardPage.navbar.createSurveyLink).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('copy survey dialog with advanced options has no WCAG A/AA violations', async ({
    page,
    survey,
    dashboardPage,
  }, testInfo) => {
    const { navbar } = dashboardPage;
    await dashboardPage.goto();
    await navbar.openCopySurveyDialog();
    await expect(navbar.copySurveyDialog).toBeVisible();
    await navbar.chooseCopySource(survey.title);
    await navbar.showCopySurveyAdvancedOptions();
    await expect(navbar.copySurveyAdvancedOptions).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('import survey dialog has no WCAG A/AA violations', async ({ page, dashboardPage }, testInfo) => {
    await dashboardPage.goto();
    await dashboardPage.navbar.openImportSurveyDialog();
    await expect(dashboardPage.navbar.importSurveyDialog).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test.describe('floating actions bar', () => {
    test.beforeEach(async ({ survey, dashboardPage }) => {
      await dashboardPage.goto({ viewType: 'list-widget' });
      await dashboardPage.selectSurvey(survey.title);
      await expect(dashboardPage.floatingActions.root).toBeVisible();
    });

    test('export survey dialog has no WCAG A/AA violations', async ({ page, dashboardPage }, testInfo) => {
      await dashboardPage.floatingActions.openExport('Survey structure (*.lss)');
      await expect(dashboardPage.floatingActions.openDialog).toBeVisible();

      const results = await scanAccessibility(page, testInfo);

      expect(summarizeViolations(results.violations)).toEqual([]);
    });

    for (const action of ['Set survey group', 'Set survey theme', 'Delete']) {
      test(`"${action}" dialog has no WCAG A/AA violations`, async ({ page, dashboardPage }, testInfo) => {
        await dashboardPage.floatingActions.openAction(action);
        await expect(dashboardPage.floatingActions.openDialog).toBeVisible();

        const results = await scanAccessibility(page, testInfo);

        expect(summarizeViolations(results.violations)).toEqual([]);
      });
    }
  });
});
