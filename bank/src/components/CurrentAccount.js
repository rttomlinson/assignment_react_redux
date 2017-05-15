import React from 'react';


const CurrentAccount = ({account}) => {
    
    
    return (
        <div>
            <p>Account Number: {account.id}</p>
            <p>Account Balance: {account.balance}</p>
            <form>
                <div>
                    <label htmlFor="amount">Monies</label>
                    <input type="text" name="amount" id="amount" />
                </div>
            </form>

            
        </div>
    );
};

export default CurrentAccount;