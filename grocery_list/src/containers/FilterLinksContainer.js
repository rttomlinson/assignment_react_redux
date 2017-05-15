import React from 'react';
import { connect } from 'react-redux';
import FilterLinks from '../components/FilterLinks';
import { setPurchasedFilter } from '../actions';

function mapStateToProps(state) {
  return {
    currentFilter: state.groceryFilters.purchasedFilter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: e => {
      e.preventDefault();
      const filterValue = e.target.id;
      //dispatch change filter
      dispatch(setPurchasedFilter(filterValue));
    }
  };
}

const FilterLinksContainer = connect(mapStateToProps, mapDispatchToProps)(
  FilterLinks
);

export default FilterLinksContainer;
