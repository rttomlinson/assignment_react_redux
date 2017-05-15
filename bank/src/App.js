import React, { Component } from 'react';
import AccountsContainer from './containers/AccountsContainer';
import CurrentAccountContainer from './containers/CurrentAccountContainer';
import TransactionsContainer from './containers/TransactionsContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AccountsContainer />
        <CurrentAccountContainer />
        <TransactionsContainer />
      </div>
    );
  }
}

export default App;
