import { routes } from '../../utils/routes.js';
import { AdminPage } from './AdminPage.js';

/**
 * Survey list: surveyAdministration/listsurveys
 * (views/surveyAdministration/listSurveys_view.php, ListSurveysWidget, SearchBoxWidget).
 */
export class SurveyListPage extends AdminPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Survey list', level: 1 });
    this.searchInput = page.getByRole('textbox', { name: 'Search surveys' });
    this.grid = page.locator('#survey-grid');
    this.rows = this.grid.locator('tbody').getByRole('row');
    this.surveyGroupsTab = page.getByRole('tab', { name: 'Survey groups' });
    this.surveyGroupsGrid = page.locator('#surveygroups--gridview');
    // The row "Action Menu" <ul> is moved to <body> by action_dropdown.js when opened.
    this.openActionMenu = page.locator('body > ul.dropdown-menu.show');
  }

  async goto() {
    await this.page.goto(routes.admin.surveyList);
    return this;
  }

  /** The search form submits (GET) on Enter. */
  async search(text) {
    await this.searchInput.fill(text);
    await Promise.all([
      this.page.waitForURL((url) => url.searchParams.get('Survey[searched_value]') === text),
      this.searchInput.press('Enter'),
    ]);
  }

  /** @param {string} title */
  surveyRow(title) {
    return this.rows.filter({ has: this.page.getByRole('link', { name: title, exact: true }) });
  }

  /**
   * Status link of a row: "Inactive", "Active", "End: …", "Expired: …" or "Start: …"
   * (Survey::getRunning renders it as `a.survey-state`).
   * @param {string} title
   */
  surveyStatus(title) {
    return this.surveyRow(title).locator('a.survey-state');
  }

  /** @param {string} title */
  async openRowActions(title) {
    await this.surveyRow(title).getByRole('button', { name: 'Action Menu' }).click();
  }

  async openSurveyGroupsTab() {
    await this.surveyGroupsTab.click();
  }
}
