/**
 * @flow
 * External Dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal Dependencies
 */
import App from './app';

/**
 * Render in DOM
 */
ReactDOM.render(
  <App />,
  // $FlowFixMe
  document.querySelector('#app')
);
