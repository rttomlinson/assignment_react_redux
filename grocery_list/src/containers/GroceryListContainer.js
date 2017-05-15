import React from 'react'
import { connect } from 'react-redux';
import GroceryList from '../components/GroceryList';

function filteredItems(list, filter) {
    return list.filter((item) => {
        return true; //filter function
    });
}

function mapStateToProps(state) {
    return {
        items: filteredItems(state.groceryItems, state.groceryFilters)
    };
}


const GroceryListContainer = connect(mapStateToProps)(GroceryList);

export default GroceryListContainer