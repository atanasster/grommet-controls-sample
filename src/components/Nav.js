import React from 'react';
import { Box, Anchor, Text } from 'grommet';
import { ResponsiveContext } from 'grommet/contexts';
import { Radial as GrommetIcon } from 'grommet-icons';
import { Header } from 'grommet-controls';
import { RoutedAnchor } from './RoutedLinks';

export default () => (
  <Header
    position='sticky'
  >

    <ResponsiveContext.Consumer>
      {size => (
        <Box flex={true} direction='row' justify='between' align='center'>
          <RoutedAnchor path='/'>
            <Box
              direction='row'
              align='center'
              margin={{
                right: 'small',
              }}
            >
              <GrommetIcon />
              {size !== 'narrow'
                ? (
                  <Box
                    margin={{
                      horizontal: 'small',
                    }}
                  >
                    <Text>grommet-controls</Text>
                  </Box>
                )
                : null}
            </Box>
          </RoutedAnchor>
          <Box direction='row' align='center'>
            <Anchor href='https://github.com/atanasster/grommet-controls-sample' target='_blank'>git</Anchor>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </Header>
);
