import React from 'react';

import { PageLayout } from '../layouts';
import {
  ChallengeTitle,
  ChallengeContent,
  ChallengeActions,
} from '../templates';

export const ChallengePage = ({ challenge }) => {
  return (
    <PageLayout
      header={<ChallengeTitle challenge={challenge} />}
      main={<ChallengeContent challenge={challenge} />}
      footer={<ChallengeActions />}
    />
  );
};
