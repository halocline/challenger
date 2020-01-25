import React, { useState } from 'react';
import { Button, Grommet } from 'grommet';
import './reset.css';

import { challenges } from './data';
import { ChallengePage, ChallengesPage } from './pages';
import { AppLayout } from './layouts';
import { challenger } from './themes';

const challenge = challenges[0];

const App = () => {
  const [page, setPage] = useState('challenge');

  return (
    <Grommet theme={challenger} themeMode="light">
      <Button
        label="Show Challenge Detail"
        onClick={() => setPage('challenge')}
      />
      <Button label="Show Challenges" onClick={() => setPage('challenges')} />
      <AppLayout>
        {challenge && page === 'challenge' && (
          <ChallengePage challenge={challenge} />
        )}
        {challenges && page === 'challenges' && (
          <ChallengesPage challenges={challenges} />
        )}
      </AppLayout>
    </Grommet>
  );
};

export default App;
