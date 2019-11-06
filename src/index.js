import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//import Connect from 'react-redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import manageUsers from './reducers/manageUsers'


// add imports and code


ReactDOM.render(
  // add imports and code
  < Provider />
  <App />
  // add imports and code
  </Provider >
  ,
  document.getElementById('root')
);
