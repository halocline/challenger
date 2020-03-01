import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grommet } from 'grommet';
import './reset.css';

import { AppLayout } from './layouts';
import { challenger } from './themes';
import { ChallengePage, ChallengesPage, HomePage } from './pages';

const App = () => {
  return (
    <Grommet theme={challenger} themeMode="light">
      <Router>
        <AppLayout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/challenges" component={ChallengesPage} />
            <Route path="/challenge" exact component={ChallengePage} />
            <Route path="/challenge/:id" component={ChallengePage} />
          </Switch>
        </AppLayout>
      </Router>
    </Grommet>
  );
};

export default App;
