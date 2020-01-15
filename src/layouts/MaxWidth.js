import React from 'react';
import { Box } from 'grommet';

const MaxWidth = ({ children }) => {
  return (
    <Box align="center" pad={{ horizontal: 'xlarge' }} fill>
      <Box border align="center" width={{ max: 'xlarge' }} fill>
        {children}
      </Box>
    </Box>
  );
};

export { MaxWidth };
