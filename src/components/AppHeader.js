import React from 'react';
import { Box, Button, Header, Text } from 'grommet';
import { Achievement } from 'grommet-icons';

import { logEvent } from '../utils';

const AppHeader = () => {
  return (
    <Header
      background="brand"
      pad={{ horizontal: 'large', vertical: 'small' }}
      justify="center"
      fill
    >
      <Box
        direction="row"
        align="center"
        fill
        justify="between"
        height={{ min: 'xxsmall' }}
        width={{ max: 'xlarge' }}
      >
        <Button onClick={event => logEvent(event)}>
          <Box direction="row" gap="small">
            <Achievement />
            <Text>Challenger</Text>
          </Box>
        </Button>
        <Box>
          <Button
            label="Do something"
            primary
            onClick={event => logEvent(event)}
          />
        </Box>
      </Box>
    </Header>
  );
};

export { AppHeader };
