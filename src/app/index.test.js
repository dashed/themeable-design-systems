// @flow

// 3rd-party imports

import React from 'react';
import ReactDOM from 'react-dom';

// components

import App from '~/app/index';

// tests

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
