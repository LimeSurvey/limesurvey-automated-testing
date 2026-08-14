const { test, expect } = require('@playwright/test');
const { API_URL } = require('../utils/urls');

test.describe('Rest API', () => {
  let apiToken;

  // these tests already test the get_session_key and release_session_key methods
  test.beforeAll(async ({ request }) => {
    const res = await request.post(`${API_URL}/session`, {
      data: {
        username: process.env.TEST_USER,
        password: process.env.TEST_PASSWORD
      },
    });
    const response = await res.json();
    expect(res.ok()).toBeTruthy();
    apiToken = response;
    expect(typeof response).toBe('string');
  });

  test.afterAll(async ({ request }) => {
    if (!apiToken) return;
    await request.delete(`${API_URL}/session`, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      },
    });
  });

  test('list users', async ({ request }) => {
    const res = await request.get(`${API_URL}/user`, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      },
      data: {
        pageSize: 10,
        page: 1
      },
    });
    const response = await res.json();
    expect(res.ok()).toBeTruthy();
    expect(response.users[0].name).toBe(process.env.TEST_USER);
  });
});
