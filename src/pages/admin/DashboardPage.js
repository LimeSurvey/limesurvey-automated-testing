import { FloatingActionsBar } from '../../components/FloatingActionsBar.js';
import { routes } from '../../utils/routes.js';
import { AdminPage } from './AdminPage.js';

/**
 * Admin home: dashboard/view (DashboardController::actionView, views/dashboard/welcome.php).
 */
export class DashboardPage extends AdminPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.marker = this.viewMarker('index');
    // List view (ListSurveysWidget) and box view (BoxesWidget)
    this.searchInput = page.getByRole('textbox', { name: 'Search surveys' });
    this.statusFilter = page.locator('#survey_active');
    this.floatingActions = new FloatingActionsBar(page);
  }

  /**
   * Always pass the view type: without it LimeSurvey shows the box view once and then
   * silently switches the user's preference to the list view.
   * @param {{ viewType?: 'list-widget'|'box-widget' }} [options]
   */
  async goto({ viewType = 'list-widget' } = {}) {
    await this.page.goto(`${routes.admin.dashboard}?viewtype=${viewType}`);
    return this;
  }

  /** Filters the list view; the search form submits (GET) on Enter. */
  async searchSurveys(text) {
    await this.searchInput.fill(text);
    await Promise.all([
      this.page.waitForURL((url) => url.searchParams.get('Survey[searched_value]') === text),
      this.searchInput.press('Enter'),
    ]);
  }

  /** @param {string} title */
  surveyCheckbox(title) {
    return this.page.getByRole('checkbox', { name: `Select survey ${title}`, exact: true });
  }

  /** Searches for a survey and selects its row, which reveals the floating actions bar. */
  async selectSurvey(title) {
    await this.searchSurveys(title);
    await this.surveyCheckbox(title).check();
  }
}
