import { expect, test } from '../../../src/fixtures/index.js';
import { scanAccessibility, summarizeViolations } from '../../../src/utils/accessibility.js';

test.describe('Accessibility: survey administration', { tag: ['@admin', '@a11y'] }, () => {
  // Application bug (LimeSurvey 7.10.0, verified 2026-11-16), every screen fails color-contrast, plus
  // on the survey list / survey groups tabs:
  //   aria-required-children / aria-required-parent / listitem: the `#surveysystem` tablist wraps
  //   its role="tab" links in <li> elements, so the tabs are not owned by the tablist
  //   link-name: title links of surveys without a title render as empty <a>
  // Issue: TODO link once filed. Remove this line when fixed; do not relax the assertions.
  test.fixme();

  test('survey list has no WCAG A/AA violations', async ({
    page,
    survey: _survey,
    surveyListPage,
  }, testInfo) => {
    await surveyListPage.goto();
    await expect(surveyListPage.grid).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('survey list row actions menu has no WCAG A/AA violations', async ({
    page,
    survey,
    surveyListPage,
  }, testInfo) => {
    await surveyListPage.goto();
    await surveyListPage.search(survey.title);
    await surveyListPage.openRowActions(survey.title);
    await expect(surveyListPage.openActionMenu.getByRole('link', { name: 'General settings' })).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('survey groups tab has no WCAG A/AA violations', async ({ page, surveyListPage }, testInfo) => {
    await surveyListPage.goto();
    await surveyListPage.openSurveyGroupsTab();
    await expect(surveyListPage.surveyGroupsGrid).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('create survey group form has no WCAG A/AA violations', async ({
    page,
    surveyGroupPage,
  }, testInfo) => {
    await surveyGroupPage.gotoCreate();
    await expect(surveyGroupPage.codeInput).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });

  test('create survey form with a custom administrator has no WCAG A/AA violations', async ({
    page,
    createSurveyPage,
  }, testInfo) => {
    await createSurveyPage.goto();
    await createSurveyPage.chooseCustomAdministrator();
    await expect(createSurveyPage.administratorNameInput).toBeVisible();

    const results = await scanAccessibility(page, testInfo);

    expect(summarizeViolations(results.violations)).toEqual([]);
  });
});
