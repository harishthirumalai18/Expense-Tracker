import React from 'react';

const Header = ({ totalIncome }) => {
  return (
    <div className='Header'>
        <h1>Income / Expense Tracker</h1>
        <div><p>Total Spend</p>₹{totalIncome}</div>
    </div>
  )
}

export default Header;