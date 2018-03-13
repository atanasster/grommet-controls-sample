import React, { Component } from 'react';

import { Box, Responsive, RoutedAnchor, Text } from 'grommet';
import { Radial as GrommetIcon } from 'grommet-icons';

const NavAnchor = ({ path, label }) => (
  <Box pad={{ horizontal: 'small' }}>
    <RoutedAnchor path={path} label={label} />
  </Box>
);

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
            <NavAnchor path='/git' label='git' />
          </Box>
        </Box>
      </Responsive>
    );
  }
}
