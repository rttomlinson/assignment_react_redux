import React from 'react';
import { connect } from 'react-redux';
import CurrentAccount from '../components/CurrentAccount';

function mapStateToProps(state) {
    //filter for the current account
    const account = state.bankAccounts.accounts.find((account) => {
        return account.id === state.bankAccounts.selectedAccount;
    });
    return {
        account
    };
    
    
}



const CurrentAccountContainer = connect(mapStateToProps)(CurrentAccount);

export default CurrentAccountContainer;