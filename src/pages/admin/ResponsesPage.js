import { routes } from '../../utils/routes.js';
import { AdminPage } from './AdminPage.js';

/**
 * Response browser: responses/browse?surveyId=X
 * (ResponsesController::actionBrowse, views/responses/browseindex_view.php).
 * Inactive surveys redirect to the survey overview.
 */
export class ResponsesPage extends AdminPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Survey responses', level: 1 });
    this.grid = page.locator('#responses-grid');
    this.rows = this.grid.locator('tbody').getByRole('row');
  }

  /** @param {number} surveyId */
  async goto(surveyId) {
    await this.page.goto(routes.admin.responses(surveyId));
    return this;
  }

  /** @param {string} text an answer value shown in the grid */
  responseRow(text) {
    return this.rows.filter({ hasText: text });
  }
}
