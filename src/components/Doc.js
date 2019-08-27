import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Heading, Paragraph, Markdown } from 'grommet';
import PropsTable from './PropsTable';

const LargeParagraph = styled(Paragraph)`
  max-width: 100%;
`;

const DocInfo = ({ doc, example, examples }) => (
  <Box>
    <Box direction='row-responsive'>
      <Box
        margin={{
          vertical: 'large',
        }}
        basis='1/2'
        align='start'
      >
        <Heading level={1}>
          <strong>{doc.displayName}</strong>
        </Heading>
        <Markdown
          components={{
            p: {
              component: LargeParagraph,
            },
          }}
        >
          {doc.description}
        </Markdown>
      </Box>
      <Box
        flex={true}
        pad={{
          vertical: 'large',
        }}
      >
        {example && example()}
      </Box>
    </Box>
    <Box
      pad={{
        horizontal: 'large', bottom: 'large',
      }}
    >
      <PropsTable
        properties={doc.props}
        componentName={doc.displayName}
        examples={examples}
      />
    </Box>
  </Box>
);

const Doc = ({ children, desc, examples }) => (
  <Box
    pad={{
      horizontal: 'large', top: 'large',
    }}
  >
    {console.log(desc)}
    {desc ? desc.map((doc, index) => (
      <DocInfo
        key={doc.displayName}
        doc={doc}
        example={index === 0 ? examples.main : undefined}
        examples={index === 0 ? examples : undefined}
      />
    )) : null}
    {children}
  </Box>
);

Doc.propTypes = {
  desc: PropTypes.array,
  examples: PropTypes.object,
};

Doc.defaultProps = {
  desc: undefined,
  examples: {},
};

export default Doc;
