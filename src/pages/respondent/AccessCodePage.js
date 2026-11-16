import { routes } from '../../utils/routes.js';

/**
 * Access-code prompt of a closed-access survey
 * (fruity_twentythree: layout_user_forms.twig > content/userforms.twig > logincomponents/token.twig).
 */
export class AccessCodePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
    // #main-row / #main-col are duplicated on this page, so scope to the form.
    this.form = page.locator('#form-token');
    this.prompt = page.getByRole('heading', {
      name: 'Please enter your access code to participate in this survey.',
    });
    this.accessCodeInput = page.getByLabel('Access code:');
    this.continueButton = this.form.getByRole('button', { name: 'Continue' });
    this.errorMessage = page.getByRole('alert').filter({
      hasText: 'The access code you have provided is either not valid, or has already been used.',
    });
  }

  /** @param {number} surveyId */
  async goto(surveyId) {
    await this.page.goto(routes.respondent.survey(surveyId));
    return this;
  }

  /**
   * Submits an access code. A valid code opens the survey.
   * @param {string} code
   * @returns {Promise<import('./SurveyPage.js').SurveyPage>}
   */
  async submitAccessCode(code) {
    const { SurveyPage } = await import('./SurveyPage.js');
    await this.accessCodeInput.fill(code);
    await Promise.all([this.page.waitForEvent('load'), this.continueButton.click()]);
    return new SurveyPage(this.page);
  }
}
