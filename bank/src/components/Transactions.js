import React from 'react';
import PropTypes from 'prop-types';

function getTransactions(transactions, onClick) {
  return transactions.map(function(el) {
    return (
        <li>{el.type}</li>
    );
  });
}

const Transactions = ({ transactions, onClick }) => {
  return (
    <div>
      <ul>
        {getTransactions(transactions, onClick)}
      </ul>
    </div>
  );
};
Transactions.propTypes = {
    transactions: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Transactions;
