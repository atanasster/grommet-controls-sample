import React from 'react';
import { Box } from 'grommet';
import { Lock, Unlock } from 'grommet-icons';
import { PasswordInput } from 'grommet-controls';
import doc from 'grommet-controls/components/PasswordInput/doc';
import Doc from '../components/Doc';

const desc = doc(PasswordInput).toJSON();

export default class PasswordInputDoc extends React.Component {
  state = {
    password: 'password',
  };

  render() {
    const { password } = this.state;
    return (
      <Doc
        name='PasswordInput'
        desc={desc}
        example={(
          <Box direction='row'>
            <Box basis='medium'>
              <PasswordInput
                value={password}
                onChange={({ target: { value } }) => this.setState({
                  password: value,
                })}
              />
            </Box>
          </Box>
)}
        examples={{
          viewIcon: (
            <PasswordInput
              viewIcon={<Unlock />}
              hideIcon={<Lock />}
              a11yTitle='enter password'
              value={password}
              onChange={({ target: { value } }) => this.setState({
                password: value,
              })}
            />
          ),
        }}
      />
    );
  }
}
