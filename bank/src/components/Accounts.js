import React from 'react';
import propTypes from 'prop-types';

function getAccounts(accounts, onClick) {
  return accounts.map(function(el) {
    return (
      <li>
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            onClick(el.id);
          }}
        >
          Account number: {el.id}
          Balance: {el.balance}
        </a>
      </li>
    );
  });
}

const Accounts = ({ accounts, onClick }) => {
  return (
    <div>
      <ul>
        {getAccounts(accounts, onClick)}
      </ul>
    </div>
  );
};

export default Accounts;
