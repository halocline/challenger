import React from 'react';
import { Heading, Main, Paragraph } from 'grommet';

import { Challenge } from '../components';
import { AppLayout } from '../layouts';

const ChallengeLayout = () => {
  return (
    <AppLayout>
      <Main background="background-back">
        <Challenge />
      </Main>
    </AppLayout>
  );
};

export { ChallengeLayout };
