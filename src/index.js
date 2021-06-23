import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import usersReducer from './reducers/usersReducer.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'



const reducer = combineReducers({
  users: usersReducer, 
  currentUser, 
  loginForm
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


ReactDOM.render(
  /// we wrap APP in Provider so any child component has access to the store

  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
 
