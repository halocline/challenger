import React from 'react';
import { Text } from 'grommet';

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
    <Tile
      header={<TileHeading challenge={challenge} />}
      footer={<TileFooter challenge={challenge} />}
      height="small"
    >
      <Text>{promotion.intro}</Text>
    </Tile>
  );
};
