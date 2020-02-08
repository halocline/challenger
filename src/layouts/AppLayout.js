import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import { AppHeader } from '../components';

const AppLayout = ({ children }) => {
  return (
    <Box align="center">
      <AppHeader />
      {children}
    </Box>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppLayout };
