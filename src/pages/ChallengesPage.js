import React from 'react';
import { Grid, Heading } from 'grommet';

import { PageLayout } from '../layouts';
import { ChallengeTile } from '../templates';

const ChallengeGrid = ({ children }) => {
  return (
    <Grid
      columns={{
        count: 'fill',
        size: 'small',
      }}
      // rows="flex"
      gap="small"
    >
      {children}
    </Grid>
  );
};

export const ChallengesPage = ({ challenges }) => {
  return (
    <PageLayout header={<Heading>Challenges</Heading>} footer="dfsafsaf faf">
      <ChallengeGrid>
        <ChallengeTile key={challenges[1].id} challenge={challenges[1]} />
        <ChallengeTile key={challenges[1].id} challenge={challenges[1]} />
        <ChallengeTile key={challenges[1].id} challenge={challenges[1]} />
        <ChallengeTile key={challenges[0].id} challenge={challenges[0]} />
      </ChallengeGrid>
    </PageLayout>
  );
};
