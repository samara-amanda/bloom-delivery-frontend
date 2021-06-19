import React from 'react';

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users/1/orders')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      "Hello I'm React!"
    );

  }
}

export default App;
