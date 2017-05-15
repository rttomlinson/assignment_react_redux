import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryListContainer from './containers/GroceryListContainer';
import AddItemContainer from './containers/AddItemContainer';
import FilterLinksContainer from './containers/FilterLinksContainer';
import SortLinksContainer from './containers/SortLinksContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GroceryListContainer />
        <AddItemContainer />
        <FilterLinksContainer />
        <SortLinksContainer />
      </div>
    );
  }
}

export default App;
