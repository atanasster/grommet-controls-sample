import React, { Component } from 'react';
import {
  Box, Paragraph, Heading, Chart, Button, Image,
} from 'grommet';
import { Favorite } from 'grommet-icons';
import {
  Avatar,
  Card,
  DropInput,
  ImageStamp,
  MaskedInput,
  NumberInput,
  PagingTable,
  Spinning,
  Form,
  TextInputField,
  validators,
  CheckBoxField,
  Colors,
  materialColors,
  ColorInput,
  IconButton,
  Notification,
  Tag,
  Value,
  DateInput,
  EmailInput,
  PasswordInput,
  Tags,
  uiColors,
  ColorInputField,
} from 'grommet-controls';

import { RoutedButton } from '../components/RoutedLinks';
import SideMenu from '../components/SideMenu';

const CHART_VALUES = [
  {
    value: [7, 90], label: 'ninety',
  },
  {
    value: [6, 80], label: 'eighty',
  },
  {
    value: [5, 60], label: 'sixty',
  },
  {
    value: [4, 70], label: 'seventy',
  },
  {
    value: [3, 60], label: 'sixty',
  },
  {
    value: [2, 40], label: 'forty',
  },
  {
    value: [1, 30], label: 'thirty',
  },
  {
    value: [0, 10], label: 'ten',
  },
];

const Section = ({ children, index, name }) => (
  <Box
    pad={{
      vertical: 'medium',
    }}
    animation={[
      {
        type: 'zoomIn', duration: 500, delay: 100 + (100 * index),
      },
      {
        type: 'fadeIn', duration: 500, delay: (100 * index),
      },
    ]}
  >
    <Heading
      level={2}
      margin={{
        top: 'none',
      }}
    >
      {name}
    </Heading>
    <Box direction='row' wrap={true}>
      {children}
    </Box>
  </Box>
);

const FormItem = ({ name, path, children }) => (
  <Item name={name} path={path}>
    <Form
      onSubmit={values => alert(JSON.stringify(values))}
      pad={{
        horizontal: 'small',
      }}
      focusFirstChild={false}
    >
      {children}
      <Box pad='small'>
        <Button type='submit' label='Submit' />
      </Box>
    </Form>
  </Item>
);
const Item = ({ name, path, children }) => (
  <Box
    basis='medium'
    margin={{
      right: 'medium', bottom: 'medium',
    }}
  >
    <RoutedButton path={path}>
      <Box>
        <Heading
          level={3}
          size='small'
          margin={{
            top: 'none', bottom: 'xsmall',
          }}
        >
          <strong>{name}</strong>
        </Heading>
      </Box>
    </RoutedButton>
    <Box>
      <Box
        basis='small'
        border={{
          color: 'brand', size: 'medium',
        }}
        justify='center'
        align='center'
        pad='medium'
        style={{
          overflow: 'hidden',
        }}
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
      selected: ['one', 'five'],
      date: undefined,
      phone: '3047245566',
      number: 12345.23,
    };
  }

  render() {
    const { selected, date, phone, number } = this.state;
    return (
      <Box direction='row'>
        <SideMenu
          width='medium'
          title='Inbox'
          items={[
            {
              id: 'local',
              path: '/tables',
              label: 'Local',
            },
            {
              id: 'graphql',
              path: '/table_graphql',
              label: 'GraphQL',
            },
          ]}
        />
        <Box>
          <Box pad='large'>
            <Box direction='row'>
              <Box
                margin={{
                  top: 'large',
                }}
                basis='medium'
                overflow='hidden'
              >
                <Heading level={1}>
                  <strong>grommet-controls</strong>
                </Heading>
                <Paragraph size='large' margin='none'>
                  Extensions for Grommet 2+
                </Paragraph>
              </Box>
            </Box>
          </Box>

          <Box
            pad={{
              horizontal: 'large',
            }}
          >
            <Section align='stretch' name='Controls' index={1}>
              <Item name='Avatar' path='/Avatar'>
                <Avatar
                  image='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
                  title='Adam Smith'
                  subTitle='admin'
                />
              </Item>
              <Item name='Card' path='/Card'>
                <Card
                  size={{
                    width: 'medium', height: 'small',
                  }}
                >
                  <Card.CardTitle border='bottom'>
                    Card
                  </Card.CardTitle>
                  <Card.CardContent>
                    <Image fit='contain' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='120' />
                  </Card.CardContent>
                </Card>
              </Item>
              <Item name='Colors' path='/Colors' center={true}>
                <Colors
                  size='small'
                  onSelect={({ color }) => { alert(color); }}
                  colors={materialColors}
                />
              </Item>
              <Item name='IconButton' path='/IconButton'>
                <IconButton
                  icon={<Favorite />}
                  onClick={() => alert('Clicked')}
                />
              </Item>

              <Item name='ImageStamp' path='/ImageStamp'>
                <ImageStamp
                  src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
                  round='full'
                  size='large'
                />
              </Item>
              <Item name='Notification' path='/Notification'>
                <Notification
                  border={{
                    side: 'all', color: 'brand', size: 'medium',
                  }}
                  message='Message heading'
                  state='state label'
                  timestamp={new Date()}
                  strong={true}
                  percentComplete={30}
                  status='ok'
                  onClose={() => alert('closing...')}
                />
              </Item>
              <Item name='PagingTable' path='/PagingTable'>
                <PagingTable
                  columns={[
                    {
                      Header: 'Item',
                      accessor: 'item',
                    }, {
                      Header: 'Qty',
                      accessor: 'qty',
                    }, {
                      Header: 'Price',
                      accessor: 'price',
                    }, {
                      Header: 'Total',
                      Cell: props => (
                        props.original.price * props.original.qty
                      ),
                    },
                  ]}
                  data={[
                    {
                      item: 'Fork', qty: 4, price: 5.50,
                    },
                    {
                      item: 'Knife', qty: 3, price: 2.50,
                    },
                    {
                      item: 'Spoon', qty: 2, price: 6.50,
                    },
                  ]}
                />
              </Item>
              <Item name='Spinning' path='/Spinning'>
                <Spinning />
              </Item>
              <Item name='Tag' path='/Tag'>
                <Tag label='Tag' onChange={() => alert('Closing')} />
              </Item>
              <Item name='Value' path='/Value'>
                <Value value='30%' label='last quarter sales' />
              </Item>
            </Section>
            <Section align='stretch' name='Input' index={2}>
              <Item name='ColorInput' path='/ColorInput'>
                <ColorInput
                  colors={materialColors}
                  defaultValue='#ff00aa'
                />
              </Item>
              <Item name='DateInput' path='/DateInput'>
                <DateInput
                  value={date}
                  onChange={({ target: { value } }) => this.setState({
                    date: value,
                  })}
                />

              </Item>

              <Item name='DropInput' path='/DropInput'>
                <DropInput
                  placeholder='annual sales'
                  dropContent={(
                    <Box pad='small' align='center' gap='small'>
                      <Heading margin='none' level={3}>Monthly sales</Heading>
                      <Chart
                        aria-label='Chart example'
                        bounds={[[0, 7], [0, 100]]}
                        size={{
                          width: 'medium', height: 'small',
                        }}
                        round={true}
                        values={CHART_VALUES}
                      />
                    </Box>
                  )}
                />
              </Item>
              <Item name='EmailInput' path='/EmailInput'>
                <EmailInput
                  defaultValue='john.smith@gmail.co.uk'
                />
              </Item>
              <Item name='MaskedInput' path='/MaskedInput'>
                <MaskedInput
                  placeholderChar='_'
                  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  placeholder='US Phone'
                  value={phone}
                  onChange={({ target: { value } }) => this.setState({
                    phone: value,
                  })}
                  showMask={false}
                />
              </Item>
              <Item name='NumberInput' path='/NumberInput'>
                <NumberInput
                  value={number}
                  thousandsSeparatorSymbol=','
                  onChange={({ target: { value } }) => this.setState({
                    number: value,
                  })}
                />
              </Item>
              <Item name='PasswordInput' path='/PasswordInput' center={true}>
                <PasswordInput
                  defaultValue='password'
                />
              </Item>
              <Item name='Tags' path='/Tags' center={true}>
                <Tags
                  value={selected}
                  onChange={({ value }) => this.setState({
                    selected: value,
                  })}
                  placeholder='Multiselect'
                />
              </Item>
            </Section>
            <Section align='stretch' name='Validation' index={3}>
              <FormItem name='CheckBoxField' path='/ChecBboxField'>
                <CheckBoxField
                  name='tos'
                  label='Terms of service'
                  validation={[validators.required(), validators.True('Please accept the TOS')]}
                />
              </FormItem>
              <FormItem name='ColorInputField' path='/ColorInputField'>
                <ColorInputField
                  name='color'
                  colors={uiColors}
                  label='Color'
                  validation={[validators.required()]}
                />
              </FormItem>
              <FormItem name='Form' path='/Form'>
                <TextInputField label='Text' name='text' validation={[validators.required(), validators.minLength(8)]} />
              </FormItem>
            </Section>
          </Box>
        </Box>
      </Box>
    );
  }
}
