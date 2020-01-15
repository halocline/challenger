import React from 'react';
import { Anchor, Heading, Paragraph, Text } from 'grommet';

import { challenges } from '../data';
import { Objective } from '../components';

const Challenge = ({ challenge }) => {
  const { name, location, objectives, promotion } = challenge;

  return (
    <>
      <Heading>{name}</Heading>
      <Anchor href={location.map}>{location.name}</Anchor>
      <Text>{promotion.intro}</Text>
      <Paragraph>{promotion.description}</Paragraph>
      {objectives && (
        <>
          <Heading level={2}>Objectives</Heading>
          {objectives.map(objective => {
            return <Objective key={objective.objective}>{objective}</Objective>;
          })}
        </>
      )}
    </>
  );
};

Challenge.defaultProps = {
  challenge: challenges[0],
};

export { Challenge };
