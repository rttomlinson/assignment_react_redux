import React from 'react';
import PropTypes from 'prop-types';

function getAccounts(accounts, onClick) {
  return accounts.map(function(el) {
    return (
      <li key={el.id}>
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
Accounts.propTypes = {
    accounts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Accounts;
