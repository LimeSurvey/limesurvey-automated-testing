import fs from 'node:fs';
import path from 'node:path';

/**
 * Single source of truth for environment configuration.
 *
 * Values come from the process environment first (CI), then from a local `.env` file.
 * Credentials are validated lazily so that commands that don't need them
 * (`playwright test --list`, linting) still work without a `.env` file.
 */

const projectRoot = path.resolve(import.meta.dirname, '../..');
const envFile = path.join(projectRoot, '.env');

if (fs.existsSync(envFile)) {
  // Built into Node >= 20.12. Never overrides variables that are already set.
  process.loadEnvFile(envFile);
}

function required(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable ${name}. Copy .env.example to .env or export it.`);
  }
  return value;
}

/**
 * Playwright resolves relative URLs against baseURL, so it must end with a slash and
 * every route must be relative (no leading slash). Otherwise a base such as
 * `http://host/index.php` would lose its `index.php` segment.
 */
function normalizeBaseUrl(url) {
  return url.endsWith('/') ? url : `${url}/`;
}

export const env = {
  projectRoot,
  baseURL: normalizeBaseUrl(process.env.BASE_URL || 'http://localhost:8080'),
  isCI: Boolean(process.env.CI),
  get adminUser() {
    return required('LS_ADMIN_USER');
  },
  get adminPassword() {
    return required('LS_ADMIN_PASSWORD');
  },
};

/** Where the setup project stores the authenticated admin session. */
export const ADMIN_STORAGE_STATE = path.join(projectRoot, 'playwright/.auth/admin.json');
