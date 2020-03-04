import React from 'react';
import { Box, Button, Heading, Paragraph, Anchor } from 'grommet';
import { Bookmark, Camera, Group, MapLocation, Share } from 'grommet-icons';

import { Objective } from '.';
import { logEvent } from '../utils';

const ChallengeTitle = ({ challenge }) => {
  const { name, location } = challenge;
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <>
      <Box gap="small">
        <Heading size="small">{name}</Heading>
        <Box align="start">
          <Anchor href={location.map}>{location.name}</Anchor>
        </Box>
      </Box>
      <Box direction="row" gap="large">
        <Button
          icon={<Bookmark color={isFavorite ? 'red' : null} />}
          onClick={() => setIsFavorite(!isFavorite)}
        />
        <Button icon={<Share />} onClick={() => alert('sharing!')} />
      </Box>
    </>
  );
};

const ChallengeContent = ({ challenge }) => {
  const { objectives, promotion } = challenge;

  return (
    <>
      <Paragraph fill>{promotion.description}</Paragraph>
      {objectives && (
        <>
          <Heading level={2}>Whatcha gotta do</Heading>
          {objectives.map(objective => {
            return <Objective key={objective.objective}>{objective}</Objective>;
          })}
        </>
      )}
    </>
  );
};

const ChallengeActions = () => {
  return (
    <>
      <Box direction="row" gap="medium" pad={{ vertical: 'small' }}>
        <Button
          icon={<Camera />}
          plain={false}
          onClick={event => logEvent(event)}
        />
        <Button
          icon={<MapLocation />}
          plain={false}
          onClick={event => logEvent(event)}
        />
        <Button
          icon={<Group />}
          plain={false}
          onClick={event => logEvent(event)}
        />
      </Box>
    </>
  );
};

export { ChallengeTitle, ChallengeContent, ChallengeActions };
