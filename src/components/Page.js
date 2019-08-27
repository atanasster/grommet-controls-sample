import React from 'react';
import { Box } from 'grommet';
import Nav from './Nav';

export default ({ children }) => (
  <Box>
    <Nav />
    {children}
  </Box>
);
