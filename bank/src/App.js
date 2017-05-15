import React, { Component } from 'react';
import logo from './logo.svg';
import AccountsContainer from './containers/AccountsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AccountsContainer />
      </div>
    );
  }
}

export default App;
