import React from 'react'
import { connect } from 'react-redux';
import GroceryList from '../components/GroceryList';

function filteredItems(list, filter) {
    switch(filter) {
        case "SHOW_ALL":
            return list;
        case "SHOW_PURCHASED":
            return list.filter((item) => {
                return item.purchased;
            });
        case "SHOW_UNPURCHASED":
            return list.filter((item) => {
                return !item.purchased;
            });
        default:
            return list;
    }
}

function mapStateToProps(state) {
    return {
        items: filteredItems(state.groceryItems, state.groceryFilters.purchasedFilter)
    };
}


const GroceryListContainer = connect(mapStateToProps)(GroceryList);

export default GroceryListContainer