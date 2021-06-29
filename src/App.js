import React from 'react';
import './App.css'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js';
import { BrowserRouter, Switch } from 'react-router-dom'
import { Route } from 'react-router'

import MyOrders from './components/MyOrders.js';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
      return (
      
        <div className="App">
          <BrowserRouter>
          <NavBar/>

            <Switch>
              
              
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/my-orders' component={MyOrders}/>
            </Switch>
          </BrowserRouter>
        </div>
      );
  }
}

//I do this because I know the incoming argument is an object, state, coming from redux
// and I know it has a property called currentUser
//state = { ...
//  currentUser: {...}
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
