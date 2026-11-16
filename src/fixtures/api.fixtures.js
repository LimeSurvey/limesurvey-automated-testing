import { test as base } from '@playwright/test';
import { RemoteControlClient } from '../api/RemoteControlClient.js';
import { env } from '../config/env.js';

/**
 * @typedef {object} ApiWorkerFixtures
 * @property {RemoteControlClient} remoteControl Logged-in RemoteControl client, one session per worker.
 */

/** @type {import('@playwright/test').TestType<{}, ApiWorkerFixtures>} */
export const test = base.extend({
  remoteControl: [
    async ({ playwright }, use) => {
      const request = await playwright.request.newContext({
        baseURL: env.baseURL,
        ignoreHTTPSErrors: true,
        // Must never share the browser's admin session: inside the test runner this context
        // would otherwise inherit `use.storageState`, and RemoteControl::run() ends every RPC
        // call with Yii::app()->session->destroy(), which logs out every page using that state.
        storageState: { cookies: [], origins: [] },
      });
      const client = new RemoteControlClient(request);
      await client.login(env.adminUser, env.adminPassword);

      await use(client);

      await client.logout().catch((error) => console.warn(`[remoteControl] logout failed: ${error.message}`));
      await request.dispose();
    },
    { scope: 'worker', title: 'RemoteControl API session' },
  ],
});
