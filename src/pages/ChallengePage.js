import React from 'react';

import { challenges } from '../data';
import { PageLayout } from '../layouts';
import {
  ChallengeTitle,
  ChallengeContent,
  ChallengeActions,
} from '../templates';

const getChallenge = id => challenges.find(challenge => challenge.id === id);

export const ChallengePage = ({ match }) => {
  const challenge = getChallenge(match.params.id);

  return challenge ? (
    <PageLayout
      header={<ChallengeTitle challenge={challenge} />}
      footer={<ChallengeActions />}
    >
      <ChallengeContent challenge={challenge} />
    </PageLayout>
  ) : null;
};
