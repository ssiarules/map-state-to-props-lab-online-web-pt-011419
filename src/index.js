import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//import Connect from 'react-redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import manageUsers from './reducers/manageUsers'


// add imports and code
const store = createStore (
  manageUsers,

);


ReactDOM.render(
  // add imports and code
  < Provider store = {store}>
  <App store = { store }/>
  // add imports and code
  </Provider >
  ,
  document.getElementById('root')
);
