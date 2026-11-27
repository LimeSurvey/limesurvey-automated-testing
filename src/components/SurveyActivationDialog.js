/**
 * "Activate survey" modal. Its body is loaded via AJAX from surveyAdministration/activateSurvey
 * (views/surveyAdministration/partial/topbar/_modalSurveyActivation.php,
 *  surveyActivation/_activateSurveyOptions.php, surveyActivation/_activateFooterBtns.php).
 */
export class SurveyActivationDialog {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    this.root = page.locator('#surveyactivation-modal');
    this.title = this.root.getByRole('heading', { name: 'Activate survey' });
    this.openAccessOption = this.root.getByText('Open-access mode', { exact: true });
    this.saveAndActivateButton = this.root.getByRole('button', { name: 'Save and activate' });
  }

  /**
   * Activates the survey in open-access mode (the dialog's default) and waits for the
   * survey overview with the activation feedback.
   * @returns {Promise<import('../pages/admin/SurveyOverviewPage.js').SurveyOverviewPage>}
   */
  async activate() {
    const { SurveyOverviewPage } = await import('../pages/admin/SurveyOverviewPage.js');
    // The options are loaded asynchronously; submitting before they arrive does nothing.
    await this.openAccessOption.waitFor();
    await this.saveAndActivateButton.click();
    await this.page.waitForURL(/surveyActivationFeedback/);
    return new SurveyOverviewPage(this.page);
  }
}
