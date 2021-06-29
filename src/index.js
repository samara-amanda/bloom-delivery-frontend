import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store.js'



ReactDOM.render(
  /// we wrap APP in Provider so any child component has access to the store

  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
 
