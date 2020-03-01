import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

import { AppHeader } from '../components';

const AppLayout = ({ children }) => {
  return (
    <Box height={{ min: '100vh' }} width={{ max: 'xxlarge' }}>
      <AppHeader />
      {children}
    </Box>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppLayout };
