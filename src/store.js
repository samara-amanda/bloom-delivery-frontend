import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/usersReducer'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import myOrders from './reducers/myOrders'
import signupForm from './reducers/signupForm.js'
import allItems from './reducers/allItems.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    users: usersReducer, 
    currentUser, 
    loginForm,
    myOrders, 
    signupForm,
    items: allItems
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
  