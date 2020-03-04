import React from 'react';
import { Grid, Heading } from 'grommet';

import { challenges } from '../data';
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

export const ChallengesPage = () => {
  return (
    <PageLayout header={<Heading>Challenges</Heading>} footer="dfsafsaf faf">
      <ChallengeGrid>
        {challenges &&
          challenges.map(challenge => (
            <ChallengeTile key={challenge.id} challenge={challenge} />
          ))}
      </ChallengeGrid>
    </PageLayout>
  );
};
