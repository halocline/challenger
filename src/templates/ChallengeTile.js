import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Text } from 'grommet';

import { Tile } from '../components';

const TileHeading = ({ challenge }) => {
  const { name } = challenge;

  return <Text>{name}</Text>;
};

const TileFooter = ({ challenge }) => {
  const { name } = challenge;

  return <Text>{name}</Text>;
};

export const ChallengeTile = ({ challenge }) => {
  const { promotion } = challenge;

  return (
    <Link to={`/challenge/${challenge.id}`}>
      <Button
      // as={Link}
      // to={`/challenge/${challenge.id}`}
      >
        <Tile
          header={<TileHeading challenge={challenge} />}
          footer={<TileFooter challenge={challenge} />}
          height="small"
        >
          <Text>{promotion.intro}</Text>
        </Tile>
      </Button>
    </Link>
  );
};
