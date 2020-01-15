import React from 'react';
import { Text } from 'grommet';

const Objective = ({ children }) => {
  const { objective, criteria } = children;
  return (
    <>
      <Text>{objective}</Text>
      {criteria &&
        criteria.map((criterion, index) => (
          <Text key={index}>• {criterion.criterion}</Text>
        ))}
    </>
  );
};

export { Objective };
