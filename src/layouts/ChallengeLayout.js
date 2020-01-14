import React from 'react';
import { Heading, Paragraph } from 'grommet';

import { Challenge } from '../components';
import { AppLayout } from '../layouts';

const ChallengeLayout = () => {
  return (
    <AppLayout>
      <Challenge />
    </AppLayout>
  );
};

export { ChallengeLayout };
