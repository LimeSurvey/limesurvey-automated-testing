import { routes } from '../../utils/routes.js';
import { AdminPage } from './AdminPage.js';

/**
 * Add survey participant: admin/tokens/sa/addnew/surveyid/X
 * (controllers/admin/Tokens.php::addnew, views/admin/token/tokenform.php).
 */
export class AddParticipantPage extends AdminPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Add survey participant' });
    this.firstNameInput = page.getByLabel('First name:');
    this.lastNameInput = page.getByLabel('Last name:');
    this.emailInput = page.getByLabel('Email:', { exact: true });
    // Topbar button rendered by ButtonWidget (surveyTopbarRight_view.php); id is stable.
    this.saveAndCloseButton = page.locator('#save-and-close-button');
  }

  /** @param {number} surveyId */
  async goto(surveyId) {
    await this.page.goto(routes.admin.addParticipant(surveyId));
    return this;
  }

  /**
   * Fills the form, saves, and returns to the participant list.
   * @param {{ firstname: string, lastname: string, email: string }} participant
   * @returns {Promise<import('./ParticipantsPage.js').ParticipantsPage>}
   */
  async addParticipant({ firstname, lastname, email }) {
    const { ParticipantsPage } = await import('./ParticipantsPage.js');
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);
    await this.emailInput.fill(email);
    await this.saveAndCloseButton.click();
    await this.page.waitForURL(ParticipantsPage.URL);
    return new ParticipantsPage(this.page);
  }
}
