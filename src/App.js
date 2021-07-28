import React from 'react';
import './App.css'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Signup from './components/Signup.js';
import MyOrders from './components/MyOrders.js';
import MyCart from './components/MyCart.js'
import Home from './components/Home.js'
import { Route, Switch } from 'react-router'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const {loggedIn} = this.props
      return (
      
        <div className="App">
          { loggedIn ? <Logout/> : null}
          <NavBar/>
            <Switch>
              <Route exact path='/' render={() => loggedIn ? <MyOrders/> : <Home/>}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/my-orders' component={MyOrders}/>

            </Switch>
          
        </div>
      );
  }
}

//I do this because I know the incoming argument is an object, state, coming from redux
// and I know it has a property called currentUser
//state = { ...
//  currentUser: {...}
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
