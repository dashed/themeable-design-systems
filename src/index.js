// @flow

// 3rd-party imports

import React from 'react';
import ReactDOM from 'react-dom';

// local imports

import App from './app/index';

// render the app

const mount = document.getElementById('root');

if (mount) {
  ReactDOM.render(<App />, mount);
}
