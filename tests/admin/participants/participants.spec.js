import { buildParticipants } from '../../../src/data/index.js';
import { expect, test } from '../../../src/fixtures/index.js';

test.describe('Survey participants', { tag: '@admin' }, () => {
  test('admin can add a participant manually', async ({
    surveyFactory,
    addParticipantPage,
    remoteControl,
  }) => {
    const survey = await surveyFactory.create({ closedAccess: true });
    const [participant] = buildParticipants(1);
    await addParticipantPage.goto(survey.id);

    const participantList = await addParticipantPage.addParticipant(participant);

    await expect(participantList.heading).toBeVisible();
    await expect(participantList.participantRow(participant.email)).toContainText(participant.lastname);

    await test.step('the participant is stored in the survey participant list', async () => {
      const stored = await remoteControl.listParticipants(survey.id);
      expect(stored.map((p) => p.participant_info.email)).toEqual([participant.email]);
    });
  });
});
