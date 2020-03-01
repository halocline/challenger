import React from 'react';
import { Box, Footer, Header, Main } from 'grommet';

export const Tile = ({
  background,
  children,
  header,
  footer,
  pad,
  ...rest
}) => {
  return (
    <Box border background="background-front" overflow="hidden" {...rest}>
      {header && (
        <Header background={background.header} pad={pad.header}>
          {header}
        </Header>
      )}
      <Main flex pad={pad.main}>
        {children}
      </Main>
      {footer && (
        <Footer background={background.footer} pad={pad.footer}>
          {footer}
        </Footer>
      )}
    </Box>
  );
};

Tile.defaultProps = {
  background: { header: 'background-contrast', footer: 'background-contrast' },
  pad: {
    main: { vertical: 'medium', horizontal: 'small' },
    header: 'small',
    footer: 'small',
  },
};
