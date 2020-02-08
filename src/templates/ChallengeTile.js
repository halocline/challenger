import React from 'react';
import { Box, Text } from 'grommet';

import { Tile } from '../components';

const TileHeading = ({ challenge }) => {
  const { name } = challenge;

  return (
    <Box>
      <Text>{name}</Text>
    </Box>
  );
};

const TileContent = ({ challenge }) => {
  const { name } = challenge;

  return (
    <Box>
      <Text>{name}</Text>
    </Box>
  );
};

const TileFooter = ({ challenge }) => {
  const { name } = challenge;

  return (
    <Box>
      <Text>{name}</Text>
    </Box>
  );
};

export const ChallengeTile = ({ challenge }) => {
  return (
    <Tile
      header={<TileHeading challenge={challenge} />}
      main={<TileContent challenge={challenge} />}
      footer={<TileFooter challenge={challenge} />}
    />
  );
};
