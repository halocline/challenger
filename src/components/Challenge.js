import React from 'react';
import { Heading, Paragraph } from 'grommet';

import { challenges } from '../data';

const Challenge = ({ challenge }) => {
  const { name, location, promotion } = challenge;

  return (
    <>
      <Heading>{name}</Heading>
      <Heading level={2}>{promotion.intro}</Heading>
      <Paragraph>{promotion.description}</Paragraph>
    </>
  );
};

Challenge.defaultProps = {
  challenge: challenges[0],
};

export { Challenge };
