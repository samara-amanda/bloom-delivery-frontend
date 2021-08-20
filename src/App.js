import React from 'react';
import './App.css'
import MyOrders from './components/MyOrders.js';
import ShopContainer from './containers/ShopContainer';
import { Route, Switch } from 'react-router'
import MainContainer from './containers/MainContainer';


class App extends React.Component {
  render() {
    return (
      
      <div className="App">
          <MainContainer/>
          <ShopContainer/>
      
          <Switch>
            <Route exact path='/my-orders' component={MyOrders}/>
          </Switch>
      </div>
    );
  }
}

export default App
