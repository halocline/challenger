import React from 'react';

import { PageLayout } from '../layouts';
import { ChallengeTile } from '../templates';
import { Heading } from 'grommet';

export const ChallengesPage = ({ challenges }) => {
  return (
    <PageLayout
      header={<Heading>Challenges</Heading>}
      main={
        <>
          {challenges &&
            challenges.map(challenge => (
              <ChallengeTile key={challenge.id} challenge={challenge} />
            ))}
        </>
      }
      footer=""
    ></PageLayout>
  );
};
