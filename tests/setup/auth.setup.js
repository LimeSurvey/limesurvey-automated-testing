import { test as setup} from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../../auth.json');

setup('authenticate', async ({ page }, config) => {
  console.log('Auth file path:', authFile);
  await page.goto(`${process.env.BASE_URL}/admin/authentication/sa/login`);
  await page.fill('#user', `${process.env.TEST_USER}`);
  await page.fill('#password', `${process.env.TEST_PASSWORD}`);
  await page.click('[type=submit]');
  // Wait for something that confirms login
  await page.waitForSelector('.btn.btn-info.btn-create');
  await page.context().storageState({ path: authFile });
});