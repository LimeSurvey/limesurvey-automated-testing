import { defineConfig, devices } from '@playwright/test';
import { ADMIN_STORAGE_STATE, env } from './src/config/env.js';

/**
 * Projects
 *   setup         logs in once and saves the admin session (storageState)
 *   smoke         fast health checks; run first, e.g. as a deployment gate
 *   admin         admin UI flows, reusing the saved admin session
 *   respondent    survey-taking flows, as an anonymous respondent
 *   api           RemoteControl / REST API checks, no browser
 *   accessibility axe-core scans of admin screens
 *
 * Run one with `npx playwright test --project=<name>`, or filter by tag with `--grep @smoke`.
 * @see https://playwright.dev/docs/test-configuration
 */

const chrome = devices['Desktop Chrome'];
const asAdmin = { storageState: ADMIN_STORAGE_STATE };

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: env.isCI,
  retries: env.isCI ? 2 : 0,
  // The app under test usually runs on the same CI runner, so keep CI parallelism modest.
  workers: env.isCI ? 2 : undefined,
  timeout: 60_000,
  expect: { timeout: 10_000 },

  reporter: env.isCI
    ? [['list'], ['github'], ['html', { open: 'never' }], ['junit', { outputFile: 'test-results/junit.xml' }]]
    : [['list'], ['html', { open: 'on-failure' }]],

  use: {
    baseURL: env.baseURL,
    locale: 'en-US',
    ignoreHTTPSErrors: true,
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.js$/,
      use: { ...chrome },
    },
    {
      name: 'smoke',
      testDir: './tests/smoke',
      use: { ...chrome, ...asAdmin },
      dependencies: ['setup'],
    },
    {
      name: 'admin',
      testDir: './tests/admin',
      testIgnore: ['api/**', 'accessibility/**'],
      use: { ...chrome, ...asAdmin },
      dependencies: ['setup'],
    },
    {
      name: 'respondent',
      testDir: './tests/respondent',
      use: { ...chrome },
    },
    {
      name: 'api',
      testDir: './tests/admin/api',
    },
    {
      name: 'accessibility',
      testDir: './tests/admin/accessibility',
      use: { ...chrome, ...asAdmin },
      dependencies: ['setup'],
    },
  ],
});
