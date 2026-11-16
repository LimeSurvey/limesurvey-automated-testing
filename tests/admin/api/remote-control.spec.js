import { env } from '../../../src/config/env.js';
import { expect, test } from '../../../src/fixtures/index.js';

// Session handling (get_session_key / release_session_key) is exercised by the worker-scoped
// remoteControl fixture; survey import, activation, participants and deletion by every
// seeded test. This spec only covers what no fixture already does.
test.describe('RemoteControl API', { tag: ['@admin', '@api'] }, () => {
  test('list_users includes the admin account', async ({ remoteControl }) => {
    const users = await remoteControl.listUsers();

    expect(users.map((user) => user.users_name)).toContain(env.adminUser);
  });
});
