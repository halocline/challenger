import React from 'react';
import {
  Box,
  Button,
  Footer,
  Header,
  Heading,
  Main,
  Paragraph,
  Anchor,
} from 'grommet';
import { Camera, Favorite, Group, MapLocation, Share } from 'grommet-icons';

import { challenges } from '../data';
import { Objective } from '../components';
import { MaxWidth } from '../layouts';
import { logEvent } from '../utils';

const Challenge = ({ challenge }) => {
  const { name, location, objectives, promotion } = challenge;

  return (
    <MaxWidth>
      <Header
        background="background-contrast-faint"
        pad={{ horizontal: 'medium', vertical: 'medium' }}
        fill
      >
        <Box gap="small">
          <Heading size="small">{name}</Heading>
          <Box align="start">
            <Anchor href={location.map}>{location.name}</Anchor>
          </Box>
        </Box>
        <Box direction="row" gap="large">
          <Favorite />
          <Share />
        </Box>
      </Header>
      <Main pad={{ horizontal: 'medium', vertical: 'medium' }} fill>
        <Paragraph fill>{promotion.description}</Paragraph>
        {objectives && (
          <>
            <Heading level={2}>Objectives</Heading>
            {objectives.map(objective => {
              return (
                <Objective key={objective.objective}>{objective}</Objective>
              );
            })}
          </>
        )}
      </Main>
      <Footer
        justify="center"
        background="background-contrast-faint"
        pad={{ horizontal: 'medium', vertical: 'medium' }}
        fill
      >
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
      </Footer>
    </MaxWidth>
  );
};

Challenge.defaultProps = {
  challenge: challenges[0],
};

export { Challenge };
