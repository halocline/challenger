import React from 'react';
import { Box, Footer, Header, Main } from 'grommet';

const cardCorners = {
  top: { corner: 'top', size: 'xsmall' },
  bottom: { corner: 'bottom', size: 'xsmall' },
};

export const Tile = ({ header, footer, main }) => {
  return (
    <Box background="background-front" round={cardCorners.top}>
      <Header
        pad={{ horizontal: 'medium', vertical: 'small' }}
        round={cardCorners.top}
      >
        {header}
      </Header>
      <Main pad={{ horizontal: 'medium', vertical: 'small' }}>{main}</Main>
      <Footer
        background="background-contrast"
        pad={{ horizontal: 'medium', vertical: 'small' }}
        round={cardCorners.bottom}
      >
        {footer}
      </Footer>
    </Box>
  );
};
