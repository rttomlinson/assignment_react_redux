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
    //create new array of the list since unable to modify
    let tempList = [...list];
  if (sorting === 'ASC') {
    tempList.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();

      if (a.name < b.name) return -1;
      else return 1;
    });
  } else if (sorting === 'DESC') {
    tempList.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();

      if (a.name < b.name) return 1;
      else return -1;
    });
  }

  return tempList;
}

function mapStateToProps(state) {
  let filtered = filteredItems(
    state.groceryItems,
    state.groceryFilters.purchasedFilter
  );
  let sorted = sortedItems(filtered, state.grocerySort);

  return {
    items: sorted
  };
}

const GroceryListContainer = connect(mapStateToProps)(GroceryList);

export default GroceryListContainer;
