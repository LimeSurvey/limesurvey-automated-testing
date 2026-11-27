import { SurveyActivationDialog } from '../../components/SurveyActivationDialog.js';
import { routes } from '../../utils/routes.js';
import { AdminPage } from './AdminPage.js';

/**
 * Survey overview (classic editor): surveyAdministration/view?surveyid=X
 * (SurveyAdministrationController::actionView, views/surveyAdministration/surveySummary_view.php,
 *  topbar in views/surveyAdministration/partial/topbar/surveyTopbarLeft_view.php).
 */
export class SurveyOverviewPage extends AdminPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Survey overview', level: 1 });
    // Breadcrumb text: "<title> (<survey id>)"
    this.breadcrumbTitle = page.locator('#breadcrumb__survey--overview');

    this.activateButton = page.getByRole('button', { name: 'Activate survey' });
    this.stopSurveyLink = page.getByRole('link', { name: 'Stop this survey' });
    this.activationFeedback = page.getByText(
      'Congrats! Your survey has been activated successfully in open-access mode.',
    );

    this.toolsButton = page.getByRole('button', { name: 'Tools' });
    this.deleteSurveyMenuItem = page.getByRole('link', { name: 'Delete survey' });
    this.deleteDialog = page.locator('#deleteSurvey_modal');
    this.confirmDeleteButton = this.deleteDialog.getByRole('button', { name: 'Delete survey' });

    this.activationDialog = new SurveyActivationDialog(page);
  }

  /** @param {number} surveyId */
  async goto(surveyId) {
    await this.page.goto(routes.admin.surveyOverview(surveyId));
    return this;
  }

  /** Opens the activation dialog; continue with `activationDialog.activate()`. */
  async openActivationDialog() {
    await this.activateButton.click();
    return this.activationDialog;
  }

  /**
   * Deletes the survey through Tools > Delete survey and waits for the dashboard.
   * @returns {Promise<import('./DashboardPage.js').DashboardPage>}
   */
  async deleteSurvey() {
    const { DashboardPage } = await import('./DashboardPage.js');
    await this.toolsButton.click();
    await this.deleteSurveyMenuItem.click();
    await this.confirmDeleteButton.click();
    await this.page.waitForURL((url) => url.href.includes(routes.admin.dashboard));
    return new DashboardPage(this.page);
  }
}
