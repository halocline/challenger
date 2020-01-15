import React from 'react';
import { Grommet } from 'grommet';
// import logo from './logo.svg';
// import './App.css';

import { AppLayout, ChallengeLayout } from './layouts';
import { challenger } from './themes';

const App = () => {
  return (
    <Grommet theme={challenger} themeMode="light">
      <AppLayout>
        <ChallengeLayout />
      </AppLayout>
    </Grommet>
  );
};

export default App;
