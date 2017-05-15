import React from 'react';
import PropTypes from 'prop-types';

function getTransactions(transactions) {
  return transactions.map(function(el) {
    return (
      <li key={el.date}>
        Transaction type: {el.type}
        <br />
        Origin: {el.origin}
        <br />
        Destination: {el.destination}
        <br />
        Amount: {el.amount}
        <br />
        Date: {new Date(el.date).toDateString()}
      </li>
    );
  });
}

const Transactions = ({ transactions, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="startDate">Starting Date</label>
        <input type="date" name="startDate" />

        <label htmlFor="endDate">Ending Date</label>
        <input type="date" name="endDate" />

        <input type="submit" />
      </form>

      <ul>
        {getTransactions(transactions)}
      </ul>
    </div>
  );
};
Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Transactions;
