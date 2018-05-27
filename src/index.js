// @flow

// 3rd-party imports

import React from 'react';
import ReactDOM from 'react-dom';

// local imports

import App, { Foo } from '~/app/index';

// render the app

// TODO: flow type? Property __docgenInfo is missing in function [1].
console.log(App.__docgenInfo);

const mount = document.getElementById('root');

if (mount) {
  ReactDOM.render(<App />, mount);
}
