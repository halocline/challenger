import React from 'react';
import { Footer, Header, Main } from 'grommet';

import { MaxWidth } from '.';

const PageLayout = ({ children, main, footer, header }) => {
  return (
    <MaxWidth>
      <Header
        background="background-contrast-faint"
        pad={{ horizontal: 'medium', vertical: 'medium' }}
        fill
      >
        {header}
      </Header>
      <Main pad={{ horizontal: 'medium', vertical: 'medium' }} fill>
        {main}
      </Main>
      <Footer
        justify="center"
        background="background-contrast-faint"
        pad={{ horizontal: 'medium', vertical: 'medium' }}
        fill
      >
        {footer}
      </Footer>
    </MaxWidth>
  );
};

export { PageLayout };
