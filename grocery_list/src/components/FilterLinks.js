import React from 'react';
import PropTypes from 'prop-types';

const FilterLinks = ({onClick, currentFilter}) => {
    return (
        <div>
            <a href="#" id="SHOW_ALL" onClick={onClick}>Show all</a>
            {" "}
            <a href="#" id="SHOW_PURCHASED" onClick={onClick}>Show Purchased</a>
            {" "}
            <a href="#" id="SHOW_UNPURCHASED" onClick={onClick}>Show Unpurchased</a>
        </div>    
    );
};

FilterLinks.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default FilterLinks;