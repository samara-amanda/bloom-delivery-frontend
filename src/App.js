import React from 'react';
import './App.css'
import ShopContainer from './containers/ShopContainer';
import { Route, Switch } from 'react-router'
import MainContainer from './containers/MainContainer';


class App extends React.Component {
  render() {
    return (
      
      <div className="App">
          <MainContainer/>
          <ShopContainer/>
      </div>
    );
  }
}

export default App
