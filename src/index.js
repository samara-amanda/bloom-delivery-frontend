import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store.js'



ReactDOM.render(
  /// we wrap APP in Provider so any child component has access to the store

  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));
 
