import React from 'react';
import { Grommet } from 'grommet';
// import logo from './logo.svg';
// import './App.css';
import './reset.css';

import { Challenge } from './components';
import { AppLayout } from './layouts';
import { challenger } from './themes';

const App = () => {
  return (
    <Grommet theme={challenger} themeMode="light">
      <AppLayout>
        <Challenge />
      </AppLayout>
    </Grommet>
  );
};

export default App;
