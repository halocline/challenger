import React from 'react';
import { Footer, Header, Main } from 'grommet';

const PageLayout = ({ children, footer, header }) => {
  return (
    <>
      <Header
        background="background-contrast-faint"
        fill
        pad={{ horizontal: 'medium', vertical: 'medium' }}
      >
        {header}
      </Header>
      <Main pad={{ horizontal: 'medium', vertical: 'medium' }}>{children}</Main>
      <Footer
        background="background-contrast-faint"
        fill
        pad={{ horizontal: 'medium', vertical: 'medium' }}
      >
        {footer}
      </Footer>
    </>
  );
};

export { PageLayout };
