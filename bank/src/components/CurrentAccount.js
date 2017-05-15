import React from 'react';

const CurrentAccount = ({ account, onSubmit, showDestination }) => {
  return (
    <div>
      <p>Account Number: {account.id}</p>
      <p>Account Balance: {account.balance}</p>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="amount">Monies</label>
          <input type="text" name="amount" id="amount" required/>
        </div>

        <label htmlFor="transaction">Transaction type</label>
        <br />

        <label htmlFor="withdraw"> Withdraw </label>
        <input id="withdraw" type="radio" name="transaction" value="withdraw" required/>

        <label htmlFor="deposit"> Deposit </label>
        <input id="deposit" type="radio" name="transaction" value="deposit" />
        
        <div>
            <label htmlFor="transfer"> Transfer </label>
            <input id="transfer" type="radio" name="transaction" value="transfer" onFocus={() => console.log("transfer on focus")} onBlur={() => console.log("transfer lost focus")} />
            <div id="destinationInput">
                <label htmlFor="destination">Destination </label>
                <input id="destination" type="text" name="destination"/>
            </div>
        </div>

        <input type="submit" name="submit" />

      </form>

    </div>
  );
};

export default CurrentAccount;
