import React, { useState } from 'react';
import { Button, Grommet } from 'grommet';
import './reset.css';

import { challenges } from './data';
import { ChallengePage, ChallengesPage } from './pages';
import { AppLayout } from './layouts';
import { challenger } from './themes';

const challenge = challenges[0];
const pages = [
  { pageName: 'challenge', layout: <ChallengePage challenge={challenge} /> },
  {
    pageName: 'challenges',
    layout: <ChallengesPage challenges={challenges} />,
  },
];

const App = () => {
  const [page, setPage] = useState(
    pages.find(page => page.pageName === 'challenges')
  );

  const handleClick = pageName => {
    const page = pages.find(page => page.pageName === pageName);
    setPage(page);
  };

  return (
    <Grommet theme={challenger} themeMode="light">
      <AppLayout>{page.layout}</AppLayout>
      <Button
        label="Show Challenge Detail"
        onClick={() => handleClick('challenge')}
      />
      <Button
        label="Show Challenges"
        onClick={() => handleClick('challenges')}
      />
    </Grommet>
  );
};

export default App;
