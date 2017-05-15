import React from 'react';
import { connect } from 'react-redux';
import Transactions from '../components/Transactions';
import { setDateFilter } from '../actions';
import serialize from 'form-serialize';

const TransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Transactions
);

function filterTransactions(transactions, dateFilter) {
  const endDate = dateFilter.endDate ? dateFilter.endDate : Date.now();

  return transactions.filter(function(el) {
    return el.date > dateFilter.startDate && el.date < endDate;
  });
}

function mapStateToProps(state) {
  return {
    transactions: filterTransactions(
      state.bankAccounts.transactions,
      state.dateFilter
    )
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSubmit: e => {
      e.preventDefault();

      const form = e.target;
      const data = serialize(form, { hash: true });

      let convertedTime = {
        startDate: Date.parse(data.startDate),
        endDate: Date.parse(data.endDate)
      };

      dispatch(setDateFilter(convertedTime));
    }
  };
}

export default TransactionsContainer;
