import React from 'react';
import { Grommet } from 'grommet';
// import logo from './logo.svg';
// import './App.css';
import './reset.css';

import { challenges } from './data';
import { ChallengePage } from './pages';
import { AppLayout } from './layouts';
import { challenger } from './themes';

const challenge = challenges[0];

const App = () => {
  return (
    <Grommet theme={challenger} themeMode="light">
      <AppLayout>
        {challenge && <ChallengePage challenge={challenge} />}
      </AppLayout>
    </Grommet>
  );
};

export default App;
