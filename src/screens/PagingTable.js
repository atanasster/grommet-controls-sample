import React from 'react';
import { Box, Text, Image, CheckBox, Select } from 'grommet';
import { Add, Subtract } from 'grommet-icons';
import { PagingTable } from 'grommet-controls';
import doc from 'grommet-controls/components/PagingTable/doc';
import Doc from '../components/Doc';

const desc = doc(PagingTable).toJSON();

const getColumn = (columns, header) => (
  columns.reduce((_, column) => (
    column.columns ? getColumn(column.columns, header) : column.Header === 'header'

  ), null)
);

const getAllColumns = (columns) => {
  let allColumns = [];
  columns.forEach((column) => {
    if (column.columns) {
      allColumns = [...allColumns, ...getAllColumns(column.columns)];
    } else {
      allColumns.push(column);
    }
  });
  return allColumns;
};

const updateColumnShow = (allColumns, visible) => (
  allColumns.map(column => (
    column.columns ? { ...column, columns: updateColumnShow(column.columns, visible) } :
      { ...column, show: visible.indexOf(column.Header) !== -1 }
  ))
);

export default class TableDoc extends React.Component {
  state = {
    grouping: false,
    filterable: true,
    sortable: true,
    paging: false,
    data: [
      {
        item: 'Fork', qty: 4, price: 5.50, image: 'http://lorempixel.com/output/food-q-c-264-260-2.jpg',
      },
      {
        item: 'Fork', qty: 1, price: 5.20, image: 'http://lorempixel.com/output/nightlife-q-c-264-260-4.jpg',
      },
      {
        item: 'Knife', qty: 3, price: 2.50, image: 'http://lorempixel.com/output/nature-q-c-264-260-7.jpg',
      },
      {
        item: 'Spoon', qty: 2, price: 6.50, image: 'http://lorempixel.com/output/sports-q-c-264-260-1.jpg',
      },
      {
        item: 'Plate', qty: 1, price: 12.49, image: 'http://lorempixel.com/output/people-q-c-264-260-2.jpg',
      },
      {
        item: 'Glass', qty: 2, price: 8.25, image: 'http://lorempixel.com/output/abstract-q-c-264-260-7.jpg',
      },
    ],
    columns: [
      {
        Header: 'Item',
        decorations: {
          header: {
            align: 'start',
          },
        },
        accessor: 'item',
      },
      {
        Header: 'Inventory',
        columns: [
          {
            Header: 'Qty',
            accessor: 'qty',
            decorations: {
              cell: {
                align: 'end',
              },
            },
            // aggregate: vals => `Total ${vals.reduce((a, b) => a + b, 0)}`,
          }, {
            Header: 'Price',
            accessor: 'price',
            decorations: {
              cell: {
                align: 'end',
              },
            },
            // aggregate: vals => `Sum ${vals.reduce((a, b) => a + b, 0)}`,
          }, {
            Header: 'Total',
            id: 'total',
            decorations: {
              cell: {
                background: { color: 'light-1' },
                align: 'end',
                color: 'brand',
                size: 'large',
              },
            },
            Cell: props => (
              props.original ? props.original.price * props.original.qty : 0
            ),
            Footer: cell => (
              <Text size='xlarge' color='brand' >{`Sum ${cell.data.reduce((a, b) => (a + b.price), 0).toFixed(2)}`}</Text>
            ),
          },
        ],
      },
    ],
  };


  onChangeFields = ({ value }) => {
    const { columns } = this.state;
    this.setState({ columns: updateColumnShow(columns, value) });
  };

  render() {
    const {
      data, grouping, sortable, filterable, paging, columns,
    } = this.state;
    const allColumns = getAllColumns(columns);
    const visibleColumns = allColumns.filter(column => !(column.show === false));
    return (
      <Box>
        <Doc
          name='Paging Table'
          desc={desc}
          example={(
            <Box gap='small' fill='horizontal'>
              <Box direction='row' justify='between'>
                <CheckBox checked={grouping} label='Group rows' onChange={() => this.setState({ grouping: !grouping })} />
                <CheckBox checked={sortable} label='Sortable' onChange={() => this.setState({ sortable: !sortable })} />
                <CheckBox checked={filterable} label='Filter' onChange={() => this.setState({ filterable: !filterable })} />
                <CheckBox checked={paging} label='Paging' onChange={() => this.setState({ paging: !paging })} />
                <Box basis='small'>
                  <Select
                    options={allColumns.map(column => column.Header)}
                    multiple={true}
                    selected={
                      visibleColumns.map(c =>
                        allColumns.findIndex(column => column.Header === c.Header))
                    }
                    value={visibleColumns.map(column => column.Header)}
                    onChange={this.onChangeFields}
                  />
                </Box>
              </Box>
              <PagingTable
                key={grouping}
                pivotBy={grouping ? ['item'] : undefined}
                defaultPageSize={4}
                filterable={filterable}
                sortable={sortable}
                showPagination={paging}
                pageSizeOptions={[2, 4, 6]}
                decorations={{
                  table: { elevation: 'large', border: 'all' },
                  headerGroup: {
                    background: 'brand', border: 'horizontal', size: 'large', align: 'center',
                  },
                  header: { border: 'all', align: 'center' },
                  filter: { background: 'light-2', border: 'all' },
                  filterInput: { size: 'small', placeholder: 'Filter...' },
                  body: { animation: { type: 'fadeIn', duration: 2000, size: 'large' } },
                  rowOdd: {
                    background: { color: 'light-1', opacity: 'medium' },
                  },
                  footer: { background: 'accent-2' },
                  pagination: { pad: { vertical: 'medium' } },
                  expander: { CloseIcon: <Subtract color='brand' />, OpenIcon: <Add color='brand' /> },
                }}
                SubComponent={row => (
                  <Box
                    direction='row'
                    pad='small'
                    gap='medium'
                    round='medium'
                    border={{ color: 'brand', size: 'large' }}
                    background='light-1'
                  >
                    <Image src={row.original.image} />
                    <Box>
                      <div><strong>Item: </strong>{row.original.item}</div>
                      <div><strong>Qty: </strong>{row.original.qty}</div>
                      <div><strong>Price: </strong>{row.original.price}</div>
                    </Box>
                  </Box>
                )}
                columns={columns}
                data={data}
              />
            </Box>
          )}
        />
      </Box>
    );
  }
}
