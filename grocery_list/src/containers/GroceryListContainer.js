import React from 'react';
import { connect } from 'react-redux';
import GroceryList from '../components/GroceryList';

function filteredItems(list, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return list;
    case 'SHOW_PURCHASED':
      return list.filter(item => {
        return item.purchased;
      });
    case 'SHOW_UNPURCHASED':
      return list.filter(item => {
        return !item.purchased;
      });
    default:
      return list;
  }
}

function sortedItems(list, sorting) {
  console.log('List before:', list);
  if (sorting == 'ASC') {
    console.log('Sorting to asc');
    list.sort(function(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  } else {
    console.log('Sorting to desc');

    list.sort(function(a, b) {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }

  console.log('List after:', list);

  return list;
}

function mapStateToProps(state) {
  return {
    items: filteredItems(
      sortedItems(state.groceryItems, state.grocerySort),
      state.groceryFilters.purchasedFilter
    )
  };
}

const GroceryListContainer = connect(mapStateToProps)(GroceryList);

export default GroceryListContainer;
