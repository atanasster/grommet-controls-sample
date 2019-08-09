import React from 'react';
import { Box, Calendar } from 'grommet';
import { Calendar as CalendarIcon, Add, Subtract } from 'grommet-icons';
import { DropInput } from 'grommet-controls';
import doc from 'grommet-controls/components/DropInput/doc';
import { smallDate } from 'grommet-controls/utils/moment';
import Doc from '../components/Doc';


const desc = doc(DropInput).toJSON();

export default class DropInputDoc extends React.Component {
  state = {
    date: smallDate(new Date()), number: '10',
  };

  render() {
    const { date, number } = this.state;
    return (
      <Doc
        name='DropInput'
        desc={desc}
        example={(
          <Box direction='row'>
            <Box basis='medium' gap='small'>
              <DropInput
                dropContent={(
                  <Box pad='small'>
                    <Calendar
                      size='small'
                      date={date}
                      onSelect={isoDate => this.setState({
                        date: smallDate(new Date(isoDate)),
                      })}
                    />
                  </Box>
                )}
                value={date}
                onChange={({ target: { value } }) => this.setState({
                  date: value,
                })}
              />
            </Box>
          </Box>
)}
        examples={{
          a11yTitle: (
            <DropInput
              a11yTitle='Birthdy date'
              value={number}
              onChange={({ target: { value } }) => this.setState({
                number: value,
              })}
            />

          ),
          disabled: (
            <DropInput
              disabled={true}
              dropContent={(
                <Box pad='small'>
                  <Calendar
                    size='small'
                    date={date}
                    onSelect={isoDate => this.setState({
                      date: smallDate(new Date(isoDate)),
                    })}
                  />
                </Box>
              )}
              value={date}
              onChange={({ target: { value } }) => this.setState({
                date: value,
              })}
            />
          ),
          dropContent: (
            <DropInput
              a11yDropTitle='Open calendar'
              mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
              dropContent={(
                <Box pad='small'>
                  <Calendar
                    size='small'
                    date={date}
                    onSelect={isoDate => this.setState({
                      date: smallDate(new Date(isoDate)),
                    })}
                  />
                </Box>
              )}
              value={date}
              onChange={({ target: { value } }) => this.setState({
                date: value,
              })}
            />
          ),
          dropIcon: (
            <DropInput
              dropIcon={<CalendarIcon />}
              dropContent={(
                <Box pad='small'>
                  <Calendar
                    size='small'
                    date={date}
                    onSelect={isoDate => this.setState({
                      date: smallDate(new Date(isoDate)),
                    })}
                  />
                </Box>
              )}
              value={date}
              onChange={({ target: { value } }) => this.setState({
                date: value,
              })}
            />
          ),
          widgets: (
            <DropInput
              value={number}
              onChange={({ target: { value } }) => this.setState({
                number: parseFloat(value),
              })}
              widgets={[
                {
                  icon: <Add />,
                  onClick: () => this.setState({
                    number: number + 1,
                  }),
                },
                {
                  icon: <Subtract />,
                  onClick: () => this.setState({
                    number: number - 1,
                  }),
                },
              ]}
            />

          ),
          plain: (
            <DropInput
              plain={true}
              defaultValue='Plain no focus'
            />
          ),
          focusIndicator: (
            <DropInput
              plain={true}
              focusIndicator={true}
              defaultValue='Plain with focus'
            />
          ),
          placeholder: (
            <DropInput
              placeholder='Enter phone...'
            />
          ),
          name: (
            <DropInput
              id='date-id'
              name='date-name'
            />
          ),
        }}
      />
    );
  }
}
