import React from 'react';
import PropTypes from 'prop-types';
import { Box, Footer, Header, Main } from 'grommet';

const AppLayout = ({ children }) => {
  return (
    <Box align="center">
      <Header background="light-2" border>
        Header
      </Header>
      <Main background="light-4" border>
        {children}
      </Main>
      <Footer background="light-2" border>
        Footer
      </Footer>
    </Box>
  );
};

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export { AppLayout };
