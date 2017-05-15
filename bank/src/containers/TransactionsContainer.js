import React from 'react';
import { connect } from 'react-redux';
import Transactions from '../components/Transactions';
//import { setSelectedAccount } from '../actions';

const TransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Transactions
);

function mapStateToProps(state) {
  return { transactions: state.bankAccounts.transactions };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: id => {
        console.log("this clicked");
    }
  };
}

export default TransactionsContainer;
