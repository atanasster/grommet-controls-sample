import React, { Component } from 'react';
import { Box, Paragraph, RoutedButton, Heading, Chart } from 'grommet';
import {
  MultiSelect, Tags, Tag, Notification, DropInput, MaskedInput,
  DateInput, NumberInput, PasswordInput, EmailInput, ColorInput, Colors, Form, Spinning,
} from 'grommet-controls';
import { placeholderChars } from 'grommet-controls/components/MaskedInput';
import { TextInputField } from 'grommet-controls/components/Form/Fields';
import validators from 'grommet-controls/components/Form/validators';
import materialUIPalette from 'grommet-controls/components/Colors/palettes/materialColors';

import Nav from '../components/Nav';

const CHART_VALUES = [
  { value: [7, 90], label: 'ninety' },
  { value: [6, 80], label: 'eighty' },
  { value: [5, 60], label: 'sixty' },
  { value: [4, 70], label: 'seventy' },
  { value: [3, 60], label: 'sixty' },
  { value: [2, 40], label: 'forty' },
  { value: [1, 30], label: 'thirty' },
  { value: [0, 10], label: 'ten' },
];

const Section = ({ children, index, name }) => (
  <Box
    pad={{ vertical: 'medium' }}
    animation={[
      { type: 'zoomIn', duration: 500, delay: 100 + (100 * index) },
      { type: 'fadeIn', duration: 500, delay: (100 * index) },
    ]}
  >
    <Heading level={2} margin={{ top: 'none' }}>
      {name}
    </Heading>
    <Box direction='row' wrap={true}>
      {children}
    </Box>
  </Box>
);

const Item = ({
  name, path, children, center,
}) => (
  <Box basis='medium' margin={{ right: 'medium', bottom: 'medium' }}>
    <RoutedButton path={path} >
      <Box>
        <Heading level={3} size='small' margin={{ top: 'none', bottom: 'xsmall' }}>
          <strong>{name}</strong>
        </Heading>
      </Box>
    </RoutedButton>
    <Box>
      <Box
        basis='small'
        border={{ color: 'brand', size: 'medium' }}
        justify={center ? 'center' : undefined}
        align={center ? 'center' : undefined}
        pad={center ? 'medium' : undefined}
        style={{ overflow: 'hidden' }}
      >
        {children}
      </Box>
    </Box>
  </Box>
);

export default class Components extends Component {
  constructor() {
    super();
    this.state = {
      options: ['one', 'two', 'three', 'four', 'five'],
      selected: ['one', 'five'],
      date: undefined,
      phone: '3047245566',
      number: 12345.23,
    };
  }
  render() {
    const {
      options, selected, date, phone, number,
    } = this.state;
    return (
      <Box>
        <Box pad='large'>
          <Nav />
          <Box direction='row'>
            <Box margin={{ top: 'large' }} basis='medium' overflow='hidden'>
              <Heading level={1}>
                <strong>Grommet Controls</strong>
              </Heading>
              <Paragraph size='large' margin='none'>
                Extensions for Grommet 2.0.
              </Paragraph>
            </Box>
          </Box>
        </Box>

        <Box pad={{ horizontal: 'large' }}>
          <Section align='stretch' name='Presentation' index={0}>
            <Item name='Tag' path='/tag' center={true}>
              <Tag
                label='Tag'
                background='accent-1'
                onChange={({ option }) => this.setState({ selected: option })}
              />
            </Item>
            <Item name='Notification' path='/notification' center={true}>
              <Notification
                message='Notification'
                onClose={() => {}}
                timestamp={new Date()}
                percentComplete={30}
                strong={true}
                status='warning'
              />
            </Item>
            <Item name='Colors' path='/colors' center={true}>
              <Colors
                size='small'
                onSelect={({ color }) => { alert(color); }}
                colors={materialUIPalette}
              />
            </Item>
            <Item name='Spinning' path='/spinning' center={true}>
              <Spinning />
            </Item>
          </Section>
          <Section align='stretch' name='Controls' index={0}>
            <Item name='Multiselect' path='/multiselect' center={true}>
              <MultiSelect
                options={options}
                onChange={({ option }) => this.setState({ selected: option })}
                placeholder='Multiselect'
                multiple={true}
                value={selected}
              />
            </Item>
            <Item name='Tags' path='/tags' center={true}>
              <Tags
                value={selected}
                onChange={({ option }) => this.setState({ selected: option })}
                placeholder='Multiselect'
              />
            </Item>
            <Item name='DropInput' path='/dropinput' center={true}>
              <DropInput
                placeholder='annual sales'
                dropContent={(
                  <Box pad='small' align='center' gap='small'>
                    <Heading margin='none' level={3}>Monthly sales</Heading>
                    <Chart
                      aria-label='Chart example'
                      bounds={[[0, 7], [0, 100]]}
                      size={{ width: 'medium', height: 'small' }}
                      round={true}
                      values={CHART_VALUES}
                    />
                  </Box>)
                }
              />
            </Item>
            <Item name='MaskedInput' path='/maskedinput' center={true}>
              <MaskedInput
                placeholderChar={placeholderChars.underscore}
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                placeholder='US Phone'
                value={phone}
                onChange={({ target: { value } }) => this.setState({ phone: value })}
                showMask={false}
              />
            </Item>

            <Item name='DateInput' path='/dateinput' center={true}>
              <DateInput
                defaultValue={date}
                placeholder='DD/MM/YYYY'
                onChange={({ target: { value } }) => alert(value)}
              />
            </Item>
            <Item name='NumberInput' path='/numberinput' center={true}>
              <NumberInput
                value={number}
                thousandsSeparatorSymbol=','
                onChange={({ target: { value } }) => this.setState({ number: value })}
              />
            </Item>
            <Item name='PasswordInput' path='/passwordinput' center={true}>
              <PasswordInput
                defaultValue='password'
              />
            </Item>
            <Item name='EmailInput' path='/emailinput' center={true}>
              <EmailInput
                defaultValue='john.smith@gmail.co.uk'
              />
            </Item>
            <Item name='ColorInput' path='/colorinput' center={true}>
              <ColorInput
                colors={materialUIPalette}
                defaultValue='#ff00aa'
              />
            </Item>
          </Section>
          <Section align='stretch' name='Form' index={2}>
            <Item name='Form' path='/form' center={true}>
              <Form focusFirstChild={false} onSubmit={(values) => alert(JSON.stringify(values))}>
                <TextInputField label='Text' name='text' validation={[validators.required(), validators.minLength(8)]} />
              </Form>
            </Item>
          </Section>
        </Box>
      </Box>
    );
  }
}
