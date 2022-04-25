import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <Helmet
          title="Weirdo JS"
          meta={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            { charSet: 'utf-8' },
            { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }
          ]}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <React.StrictMode>
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
        </React.StrictMode>
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
