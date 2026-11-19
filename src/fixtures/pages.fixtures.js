import { test as base } from '@playwright/test';
import { AccountPage } from '../pages/admin/AccountPage.js';
import { AddParticipantPage } from '../pages/admin/AddParticipantPage.js';
import { CreateSurveyPage } from '../pages/admin/CreateSurveyPage.js';
import { DashboardPage } from '../pages/admin/DashboardPage.js';
import { ForgotPasswordPage } from '../pages/admin/ForgotPasswordPage.js';
import { LoginPage } from '../pages/admin/LoginPage.js';
import { ParticipantsPage } from '../pages/admin/ParticipantsPage.js';
import { ResponsesPage } from '../pages/admin/ResponsesPage.js';
import { SurveyGroupPage } from '../pages/admin/SurveyGroupPage.js';
import { SurveyListPage } from '../pages/admin/SurveyListPage.js';
import { SurveyOverviewPage } from '../pages/admin/SurveyOverviewPage.js';
import { AccessCodePage } from '../pages/respondent/AccessCodePage.js';
import { SurveyPage } from '../pages/respondent/SurveyPage.js';

/**
 * @typedef {object} PageFixtures
 * @property {LoginPage} loginPage
 * @property {ForgotPasswordPage} forgotPasswordPage
 * @property {DashboardPage} dashboardPage
 * @property {SurveyListPage} surveyListPage
 * @property {SurveyOverviewPage} surveyOverviewPage
 * @property {CreateSurveyPage} createSurveyPage
 * @property {SurveyGroupPage} surveyGroupPage
 * @property {ParticipantsPage} participantsPage
 * @property {AddParticipantPage} addParticipantPage
 * @property {ResponsesPage} responsesPage
 * @property {AccountPage} accountPage
 * @property {SurveyPage} surveyPage
 * @property {AccessCodePage} accessCodePage
 */

/**
 * Admin modals that LimeSurvey can open on its own on any page. They are dismissed
 * automatically so they never block an action. Scoped to the footer: the welcome modal
 * also has an "x" button named "Close".
 *   #admin-notification-modal  high-importance notification, e.g. "SSL not enforced" (views/admin/super/footer.php)
 *   #welcomeModal              dashboard welcome dialog, shown when there are no surveys
 */
const AUTO_DISMISSED_MODALS = ['#admin-notification-modal', '#welcomeModal'];

/** @type {import('@playwright/test').TestType<PageFixtures, {}>} */
export const test = base.extend({
  page: async ({ page }, use) => {
    for (const selector of AUTO_DISMISSED_MODALS) {
      await page.addLocatorHandler(page.locator(selector), async (modal) => {
        await modal.locator('.modal-footer').getByRole('button', { name: 'Close' }).click();
      });
    }
    await use(page);
  },

  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  forgotPasswordPage: async ({ page }, use) => use(new ForgotPasswordPage(page)),
  dashboardPage: async ({ page }, use) => use(new DashboardPage(page)),
  surveyListPage: async ({ page }, use) => use(new SurveyListPage(page)),
  surveyOverviewPage: async ({ page }, use) => use(new SurveyOverviewPage(page)),
  createSurveyPage: async ({ page }, use) => use(new CreateSurveyPage(page)),
  surveyGroupPage: async ({ page }, use) => use(new SurveyGroupPage(page)),
  participantsPage: async ({ page }, use) => use(new ParticipantsPage(page)),
  addParticipantPage: async ({ page }, use) => use(new AddParticipantPage(page)),
  responsesPage: async ({ page }, use) => use(new ResponsesPage(page)),
  accountPage: async ({ page }, use) => use(new AccountPage(page)),
  surveyPage: async ({ page }, use) => use(new SurveyPage(page)),
  accessCodePage: async ({ page }, use) => use(new AccessCodePage(page)),
});
