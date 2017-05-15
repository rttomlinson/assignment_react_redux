import React from 'react';

const CurrentAccount = ({ account, onSubmit }) => {
  return (
    <div>
      <p>Account Number: {account.id}</p>
      <p>Account Balance: {account.balance}</p>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="amount">Monies</label>
          <input type="text" name="amount" id="amount" />
        </div>

        <label htmlFor="transaction">Transaction type</label>
        <br />

        <label htmlFor="withdraw"> Withdraw </label>
        <input id="withdraw" type="radio" name="transaction" value="withdraw" />

        <label htmlFor="deposit"> Deposit </label>
        <input id="deposit" type="radio" name="transaction" value="deposit" />

        <input type="submit" name="submit" />

      </form>

    </div>
  );
};

export default CurrentAccount;
