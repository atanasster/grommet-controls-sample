import React from 'react';
import { Box, Text, Paragraph, DropButton, Heading } from 'grommet';
import { PagingTable } from 'grommet-controls';

const DropContent = ({ title, content }) => (
  <DropButton
    style={{
      display: 'contents',
    }}
    plain={true}
    label={<Text truncate={true}>{content}</Text>}
    dropContent={(
      <Box pad='small'>
        <Box direction='row' justify='between' align='center'>
          <Heading
            level={3}
            margin={{
              vertical: 'small',
            }}
          >
            {title}
          </Heading>
        </Box>
        <pre><Paragraph>{content.split('|').map(s => s.trim()).join('\n')}</Paragraph></pre>
      </Box>

            )}
    dropProps={{
      stretch: false,
      align: {
        top: 'bottom',
      },
    }}
  />
);

export default class PropsTable extends React.Component {
  render() {
    const { properties, examples } = this.props;
    const columns = [
      {
        Header: 'interface',
        decorations: {
          header: {
            align: 'start',
          },
        },
        accessor: 'parent.name',
      },
      {
        Header: 'name',
        accessor: 'name',
        Cell: (row) => {
          if (!row.original) {
            return null;
          }
          return (
            <Text weight={row.original.required ? 'bold' : 'normal'}>
              {row.original.required ? `${row.original.name}*` : row.original.name}
            </Text>
          );
        },
      },
      {
        Header: 'description',
        accessor: 'description',
        Cell: row => row.original && (
          <DropContent
            title='description'
            content={row.original.description}
          />
        ),
      },
      {
        Header: 'type',
        accessor: 'type.name',
        Cell: row => row.original && (
          <DropContent
            title='type'
            content={row.original.type.name}
          />
        ),
      },
      {
        Header: 'default',
        accessor: 'defaultValue',
        Cell: row => row.original && (
          <DropContent
            title='default value'
            content={row.original.required ? 'required' : JSON.stringify(row.original.defaultValue, undefined, 2)}
          />
        ),
      },
    ];
    const data = Object.keys(properties).map(propertyName => ({
      ...properties[propertyName],
    }));
    return (
      <Box gap='small' fill='horizontal'>
        <PagingTable
          pivotBy={['parent.name']}
          defaultExpanded={{
            '0': {},
          }}
          defaultPageSize={50}
          filterable={false}
          sortable={true}
          showPagination={true}
          pageSizeOptions={[10, 20, 50]}
          AggregatedComponent={() => null}
          getTdProps={(finalState, rowInfo) => {
            if (!examples || (rowInfo && rowInfo.original && !examples[rowInfo.original.name])) {
              return {
                expander: false,
              };
            }
            return {};
          }}
          decorations={{
            table: {
              elevation: 'large', border: 'all',
            },
            header: {
              border: 'all', align: 'center', background: 'brand',
            },
            body: {
              animation: {
                type: 'fadeIn', duration: 2000, size: 'large',
              },
            },
            rowOdd: {
              background: {
                color: 'light-1', opacity: 'medium',
              },
            },
            pagination: {
              pad: {
                vertical: 'medium',
              },
            },
          }}
          SubComponent={row => (
            <Box
              align='center'
              flex={true}
              border={{
                color: 'brand',
              }}
              pad={{
                horizontal: 'medium',
                vertical: 'small',
              }}
            >
              {examples && examples[row.original.name] && examples[row.original.name]()}
            </Box>
          )}
          columns={columns}
          data={data}
        />
      </Box>
    );
  }
}
