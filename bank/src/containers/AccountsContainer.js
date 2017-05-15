import React from 'react';
import { connect } from 'react-redux';
import Accounts from '../components/Accounts';
import { setSelectedAccount } from '../actions';

const AccountsContainer = connect(mapStateToProps, mapDispatchToProps)(
  Accounts
);

function mapStateToProps(state) {
  return { accounts: state.bankAccounts.accounts };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: id => {
      dispatch(setSelectedAccount(id));
    }
  };
}

export default AccountsContainer;
