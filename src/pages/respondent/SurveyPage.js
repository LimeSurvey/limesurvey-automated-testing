import { routes } from '../../utils/routes.js';

/**
 * Respondent-facing survey runner, default theme fruity_twentythree
 * (themes/survey/fruity_twentythree/views/**, answer markup in application/views/survey/questions/answer/*).
 *
 * LimeSurvey 7 builds question ids from the question id alone (`Q{qid}`), so locators take a
 * question object from SeededSurvey#question(code) instead of hardcoded ids.
 *
 * @typedef {{ qid: number }} QuestionRef
 */
export class SurveyPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;

    // Welcome page (subviews/messages/welcome.twig)
    this.welcomeContainer = page.locator('#welcome-container');
    this.surveyTitle = this.welcomeContainer.getByRole('heading', { level: 1 });

    // Navigator (subviews/navigation/navigator_next_submit_button.twig). Start, Next and Submit
    // share the id `ls-button-submit`, but their accessible names differ. Since 7.12 the
    // welcome screen shows the "move next" button as "Start survey".
    this.startButton = page.getByRole('button', { name: 'Start survey', exact: true });
    this.nextButton = page.getByRole('button', { name: 'Next page', exact: true });
    this.submitButton = page.getByRole('button', { name: 'Submit', exact: true });

    // Completed page (subviews/content/submit.twig). The wrapper has neither a role nor an id,
    // so its theme class is the only hook; a custom end text replaces the default text.
    this.completedMessage = page.locator('.completed-text');

    // Page-level validation popup (theme option showpopups=1, the default). It has two buttons
    // named "Close" (header "x" and footer); the footer is the only structural difference.
    this.alertDialog = page.locator('#bootstrap-alert-box-modal');
    this.alertDialogCloseButton = this.alertDialog
      .locator('.modal-footer')
      .getByRole('button', { name: 'Close' });
  }

  /** @param {number} surveyId */
  async goto(surveyId) {
    await this.page.goto(routes.respondent.survey(surveyId));
    return this;
  }

  /**
   * Opens the survey URL and returns the HTTP status, for availability checks. The status is
   * the reliable signal: the error page body differs with the `debug` setting (LimeSurvey's
   * themed error page in production, Yii's exception page in debug mode).
   * @param {number} surveyId
   * @returns {Promise<number>}
   */
  async requestStatus(surveyId) {
    const response = await this.page.goto(routes.respondent.survey(surveyId));
    return response.status();
  }

  // ── Question locators ────────────────────────────────────────────────────

  /** @param {QuestionRef} question */
  question(question) {
    return this.page.locator(`#question${question.qid}`);
  }

  /** Text, long-text and numerical inputs share the `answerQ{qid}` id. @param {QuestionRef} question */
  textInput(question) {
    return this.page.locator(`#answerQ${question.qid}`);
  }

  /**
   * Radio input of a list (L) or yes/no (Y) question. Use for state assertions;
   * click `optionLabel()` to answer (Bootstrap hides the yes/no inputs).
   * @param {QuestionRef} question @param {string} code answer code, or 'Y'/'N'
   */
  option(question, code) {
    return this.page.locator(`#answerQ${question.qid}${code}`);
  }

  /** @param {QuestionRef} question @param {string} code */
  optionLabel(question, code) {
    return this.page.locator(`label[for="answerQ${question.qid}${code}"]`);
  }

  /** "This question is mandatory" (question_help/mandatory_tip.twig). @param {QuestionRef} question */
  mandatoryError(question) {
    return this.page
      .locator(`#ls-question-validation-Q${question.qid}`)
      .getByRole('alert')
      .filter({ hasText: 'This question is mandatory' });
  }

  // ── Actions ─────────────────────────────────────────────────────────────

  /** @param {QuestionRef} question @param {string} value */
  async answerText(question, value) {
    await this.textInput(question).fill(value);
  }

  /** @param {QuestionRef} question @param {string} code */
  async chooseOption(question, code) {
    await this.optionLabel(question, code).click();
  }

  /** Each navigator button is a full-page POST; wait for the next document to load. */
  async #navigate(button) {
    await Promise.all([this.page.waitForEvent('load'), button.click()]);
    return this;
  }

  /** Leaves the welcome page. */
  async start() {
    return this.#navigate(this.startButton);
  }

  async next() {
    return this.#navigate(this.nextButton);
  }

  async submit() {
    return this.#navigate(this.submitButton);
  }

  async closeAlertDialog() {
    await this.alertDialogCloseButton.click();
  }
}
