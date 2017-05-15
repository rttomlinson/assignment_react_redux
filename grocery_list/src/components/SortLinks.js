import React from 'react';
import PropTypes from 'prop-types';

const SortLinks = ({ onClick, currentSort }) => {
  return (
    <div>
      <a href="#" id="ASC" onClick={onClick}>Ascending</a>
      {' '}
      <a href="#" id="DESC" onClick={onClick}>Descending</a>
      {' '}
    </div>
  );
};

SortLinks.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default SortLinks;
