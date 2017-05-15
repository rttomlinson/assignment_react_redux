import { combineReducers } from 'redux';
import {
  SET_SELECTED_ACCOUNT,
  DEPOSIT,
  WITHDRAW,
  TRANSFER,
  SET_DATE_FILTER
} from './actions';

const initialAccountState = {
  accounts: [
    {
      id: 1,
      balance: 20
    },
    {
      id: 2,
      balance: 0
    }
  ],
  selectedAccount: 1,
  transactions: [],
  error: null
  //Are we expecting more accounts with fewer transactions or fewer accounts with more transactions?
};

//Filter reducer
function dateFilter(state = { startDate: 0, endDate: null }, action) {
  switch (action.type) {
    case SET_DATE_FILTER:
      return action.data;
    default:
      return state;
  }
}

//Account reducer
function bankAccounts(state = initialAccountState, action) {
  let updatedAccount;
  let newTransaction;
  let newAccounts;

  switch (action.type) {
    case SET_SELECTED_ACCOUNT:
      return {
        ...state,
        selectedAccount: action.data
      };

    case DEPOSIT:
      newTransaction = {
        type: 'deposit',
        amount: action.data,
        origin: null,
        destination: state.selectedAccount,
        date: Date.now()
      };
      newAccounts = state.accounts.map(account => {
        if (account.id === state.selectedAccount) {
          updatedAccount = {
            ...account,
            balance: Number(account.balance) + Number(action.data)
          };
          console.log(updatedAccount);
          return updatedAccount;
        }
        return account;
      });
      return {
        ...state,
        accounts: newAccounts,
        transactions: [...state.transactions, newTransaction]
      };

    case WITHDRAW:
      let userAccount = state.accounts.find(account => {
        return account.id === state.selectedAccount;
      });
      if (userAccount.balance < action.data) {
        return {
          ...state,
          error: 'Not enough money'
        };
      }

      newTransaction = {
        type: 'withdraw',
        amount: action.data,
        origin: state.selectedAccount,
        destination: null,
        date: Date.now()
      };

      newAccounts = state.accounts.map(account => {
        if (account.id === state.selectedAccount) {
          updatedAccount = {
            ...account,
            balance: Number(account.balance) - Number(action.data)
          };
          return updatedAccount;
        }
        return account;
      });
      return {
        ...state,
        accounts: newAccounts,
        transactions: [...state.transactions, newTransaction]
      };

    case TRANSFER:
      let origin = state.accounts.find(account => {
        return account.id === state.selectedAccount;
      });
      if (origin.balance < action.data.amount) {
        return {
          ...state,
          error: 'Not enough money'
        };
      }

      newTransaction = {
        type: 'transfer',
        amount: action.data.amount,
        origin: origin.id,
        destination: action.data.destination,
        date: new Date()
      };

      newAccounts = state.accounts.map(account => {
        if (account.id === origin.id) {
          updatedAccount = {
            ...account,
            balance: account.balance - action.data.amount
          };
          return updatedAccount;
        } else if (account.id === action.data.destination) {
          updatedAccount = {
            ...account,
            balance: account.balance + action.data.amount
          };
          return updatedAccount;
        } else {
          return account;
        }
      });
      return {
        ...state,
        accounts: newAccounts,
        transactions: [...state.transactions, newTransaction]
      };
    default:
      return state;
  }
}

export const bankApp = combineReducers({
  bankAccounts,
  dateFilter
});
