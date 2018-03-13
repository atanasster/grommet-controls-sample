import React, { Component } from 'react';

import { Box, Responsive, RoutedAnchor, Anchor, Text } from 'grommet';
import { Radial as GrommetIcon } from 'grommet-icons';

export default class extends Component {
  state = {}

  render() {
    const { responsive } = this.state;
    return (
      <Responsive
        onChange={nextResponsive => this.setState({ responsive: nextResponsive })}
      >
        <Box direction='row' justify='between' align='center'>
          <RoutedAnchor path='/'>
            <Box direction='row' align='center' margin={{ right: 'small' }}>
              <GrommetIcon color='brand' />
              {responsive === 'wide' ?
                <Box margin={{ horizontal: 'small' }}>
                  <Text>grommet-controls</Text>
                </Box>
                : null}
            </Box>
          </RoutedAnchor>
          <Box direction='row' align='center'>
            <Anchor href='https://github.com/atanasster/grommet-controls-sample' target='_blank'>git</Anchor>
          </Box>
        </Box>
      </Responsive>
    );
  }
}
