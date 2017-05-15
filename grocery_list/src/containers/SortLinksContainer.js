import React from 'react';
import { connect } from 'react-redux';
import SortLinks from '../components/SortLinks';
import { setSort } from '../actions';

function mapStateToProps(state) {
  return {
    currentSort: state.grocerySort
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: e => {
      e.preventDefault();
      const sortValue = e.target.id;
      dispatch(setSort(sortValue));
    }
  };
}

const SortLinksContainer = connect(mapStateToProps, mapDispatchToProps)(
  SortLinks
);

export default SortLinksContainer;
