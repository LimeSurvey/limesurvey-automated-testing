import { routes } from '../../utils/routes.js';
import { AdminPage } from './AdminPage.js';

/**
 * Classic "Create survey" form: surveyAdministration/newSurvey
 * (views/surveyAdministration/newSurvey_view.php, tabCreate_view.php).
 */
export class CreateSurveyPage extends AdminPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Create survey', level: 1 });
    this.form = page.locator('#addnewsurvey');
    // Scoped to the form: the (hidden) copy-survey dialog's "New survey title:" also matches,
    // and the navbar "Create survey" dropdown button has the same name as the submit button.
    this.titleInput = this.form.getByLabel('Survey title:');
    this.createButton = this.form.getByRole('button', { name: 'Create survey' });
    this.customAdministratorOption = page.getByText('Custom', { exact: true });
    this.administratorNameInput = page.getByLabel('Administrator name');
  }

  async goto() {
    await this.page.goto(routes.admin.newSurvey);
    return this;
  }

  async chooseCustomAdministrator() {
    await this.customAdministratorOption.click();
  }

  /**
   * Creates a survey and returns its id, read from the URL LimeSurvey redirects to.
   * The landing page depends on the `createsample` setting (question editor, group editor
   * or survey overview), so this returns the id rather than a page object.
   * @param {string} title
   * @returns {Promise<number>}
   */
  async createSurvey(title) {
    await this.titleInput.fill(title);
    await this.createButton.click();
    const surveyIdPattern = /(?:surveyid|iSurveyID)[/=](\d+)/i;
    await this.page.waitForURL(surveyIdPattern);
    return Number(this.page.url().match(surveyIdPattern)[1]);
  }
}
