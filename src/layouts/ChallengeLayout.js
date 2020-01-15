import React from 'react';
import { Box, Footer, Header, Main, Text } from 'grommet';
import { Favorite, Share } from 'grommet-icons';

import { Challenge } from '../components';
import { MaxWidth } from '.';

const ChallengeLayout = () => {
  return (
    <MaxWidth>
      <Header background="background-contrast" pad={{ vertical: 'small' }} fill>
        <Text>Actions like save and share</Text>
        <Box direction="row" gap="large">
          <Favorite />
          <Share />
        </Box>
      </Header>
      <Main
        fill
        background="background-back"
        // background="blue"
      >
        <Challenge />
      </Main>
      <Footer>Actions</Footer>
    </MaxWidth>
  );
};

export { ChallengeLayout };
