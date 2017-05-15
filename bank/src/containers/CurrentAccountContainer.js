import React from 'react';
import { connect } from 'react-redux';
import CurrentAccount from '../components/CurrentAccount';
import serialize from 'form-serialize';
import { withdraw, deposit, transfer } from '../actions';

function mapStateToProps(state) {
  //filter for the current account
  const account = state.bankAccounts.accounts.find(account => {
    return account.id === state.bankAccounts.selectedAccount;
  });
  return {
    account
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: e => {
      e.preventDefault();

      const form = e.target;
      const data = serialize(form, { hash: true });

      if (data.transaction == 'withdraw') {
        dispatch(withdraw(data.amount));
      } else if (data.transaction == 'deposit') {
        dispatch(deposit(data.amount));
      } else {
          let transferInfo = {
              destination: +data.destination,
              amount: +data.amount
          };
          dispatch(transfer(transferInfo));
      }
    }
  };
}

const CurrentAccountContainer = connect(mapStateToProps, mapDispatchToProps)(
  CurrentAccount
);

export default CurrentAccountContainer;
