import React, { Component } from 'react';
import logo from './logo.svg';
import AccountsContainer from './containers/AccountsContainer';
import CurrentAccountContainer from './containers/CurrentAccountContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <AccountsContainer />
        <CurrentAccountContainer />
      </div>
    );
  }
}

export default App;
