import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Header, Text } from 'grommet';
import { Achievement } from 'grommet-icons';

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
        <Link to="/">
          <Button
          // as={Link}
          // to="/"
          >
            <Box direction="row" gap="small">
              <Achievement />
              <Text>Challenger</Text>
            </Box>
          </Button>
        </Link>
        <Box direction="row" gap="large">
          <Link to="/challenges">
            <Button
              // as={Link}
              // to="/challenges"
              label="All"
              primary
            />
          </Link>
          <Link to="/challenge">
            <Button
              // as={Link}
              // to="/challenge"
              label="One"
              primary
            />
          </Link>
        </Box>
      </Box>
    </Header>
  );
};

export { AppHeader };
