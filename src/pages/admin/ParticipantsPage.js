import { routes } from '../../utils/routes.js';
import { AdminPage } from './AdminPage.js';

/**
 * Survey participant list: admin/tokens/sa/index/surveyid/X
 * (controllers/admin/Tokens.php::index, views/admin/token/surveyParticipantView.php).
 */
export class ParticipantsPage extends AdminPage {
  /**
   * LimeSurvey links here in path form (`admin/tokens/sa/index/surveyid/X`) but redirects here
   * after saving a participant in query form (`admin/tokens?sa=index&surveyid=X`).
   */
  static URL = /admin\/tokens(\/sa\/index|\?sa=index)/;

  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Survey participants', level: 1 });
    this.grid = page.locator('#token-grid');
    this.rows = this.grid.locator('tbody').getByRole('row');
  }

  /** @param {number} surveyId */
  async goto(surveyId) {
    await this.page.goto(routes.admin.participantsOverview(surveyId));
    return this;
  }

  /** @param {string} text e.g. an email address or access code */
  participantRow(text) {
    return this.rows.filter({ hasText: text });
  }
}
