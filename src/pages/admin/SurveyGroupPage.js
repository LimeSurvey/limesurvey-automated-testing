import { routes } from '../../utils/routes.js';
import { AdminPage } from './AdminPage.js';

/**
 * Create survey group: admin/surveysgroups/sa/create
 * (controllers/admin/SurveysGroupsController.php::create, views/admin/surveysgroups/_form.php).
 */
export class SurveyGroupPage extends AdminPage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    // Label is "Code" plus a required marker, so the generated Yii id is the stable hook.
    this.codeInput = page.locator('#SurveysGroups_name');
  }

  async gotoCreate() {
    await this.page.goto(routes.admin.createSurveyGroup);
    return this;
  }
}
