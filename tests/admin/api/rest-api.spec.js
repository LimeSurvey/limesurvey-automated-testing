import { RestApiClient } from '../../../src/api/RestApiClient.js';
import { env } from '../../../src/config/env.js';
import { expect, test } from '../../../src/fixtures/index.js';

test.describe('REST API v1', { tag: ['@admin', '@api'] }, () => {
  test('GET /user lists the admin account for an authenticated admin', async ({ request }) => {
    const api = new RestApiClient(request);
    const session = await api.createSession(env.adminUser, env.adminPassword);
    expect(session.status(), 'POST /session').toBe(200);

    const response = await api.listUsers();

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.users.map((user) => user.name)).toContain(env.adminUser);
    await api.deleteSession();
  });
});
