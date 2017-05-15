import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryListContainer from './containers/GroceryListContainer';
import AddItemContainer from './containers/AddItemContainer';
import FilterLinksContainer from './containers/FilterLinksContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <GroceryListContainer />
        <AddItemContainer />
        <FilterLinksContainer />
      </div>
    );
  }
}

export default App;
