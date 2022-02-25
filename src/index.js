import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import myOrders from './reducers/myOrders'
import signupForm from './reducers/signupForm.js'
import allItems from './reducers/allItems.js'

const reducer = combineReducers({ 
  currentUser, 
  loginForm,
  myOrders, 
  signupForm,
  allItems
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducer, 
  composeEnhancer(applyMiddleware(thunk))
)

ReactDOM.render(
  /// we wrap APP in Provider so any child component has access to the store

  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));
 
