import React, { Component } from 'react';
import { Box, Anchor, Text, RoutedAnchor } from 'grommet';
import { ResponsiveContext } from 'grommet/contexts';
import { Radial as GrommetIcon } from 'grommet-icons';

export default class extends Component {
  render() {
    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box direction='row' justify='between' align='center'>
            <RoutedAnchor path='/'>
              <Box
                direction='row'
                align='center'
                margin={{
                  right: 'small',
                }}
              >
                <GrommetIcon color='brand' />
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
    );
  }
}
