import React from 'react';
import Doc from '../components/Doc';

export default ({ match: { params: { component } } }) => {
  const [{ desc, examples }, setState] = React.useState({});
  React.useEffect(() => {
     import(`grommet-controls/components/${component}/doc/${component}.json`)
       .then((doc) => {
        import(`grommet-controls/components/${component}/doc/${component}.stories.js`)
          .then((module) => {
            setState({
              desc: doc.default,
              examples: module,
            });
          })
          .catch(err => console.warn(err));
       })
       .catch(err => console.warn(err));
  }, []);
  return (
    <Doc
      desc={desc}
      examples={examples}
    />
  );
};
