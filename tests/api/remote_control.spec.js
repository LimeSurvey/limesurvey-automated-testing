const { test, expect } = require('@playwright/test');
const { RC_URL } = require('../utils/urls');

test.describe('Remote Control API', () => {
  let apiToken;

  // these tests already test the get_session_key and release_session_key methods
  test.beforeAll(async ({ request }) => {
    const res = await request.post(RC_URL, {
      data: {
        method: 'get_session_key',
        params: [process.env.TEST_USER, process.env.TEST_PASSWORD],
        id: 1,
      },
    });
    expect(res.ok()).toBeTruthy();
    const response = await res.json();
    apiToken = response.result;
    expect(typeof apiToken).toBe('string');
  });

  test.afterAll(async ({ request }) => {
    if (!apiToken) return;
    await request.post(RC_URL, {
      data: {
        method: 'release_session_key',
        params: [apiToken],
        id: 99,
      },
    });
  });

  test('list users', async ({ request }) => {
    const res = await request.post(RC_URL, {
      data: {
        method: 'list_users',
        params: [apiToken],
        id: 2,
      },
    });
    expect(res.ok()).toBeTruthy();

    const response = await res.json();
    expect(response.result[0].users_name).toBe(process.env.TEST_USER);
  });
});
