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
        
        <div>
            <label htmlFor="transfer"> Transfer </label>
            <input id="transfer" type="radio" name="transaction" value="transfer" />
            <label htmlFor="destination">Destination </label>
            <input id="destination" type="text" name="destination" />
        </div>

        <input type="submit" name="submit" />

      </form>

    </div>
  );
};

export default CurrentAccount;
