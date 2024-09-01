import React from 'react';

const IncomeItem = ({ income, index, removeIncome }) => {

    let date = new Date(income.date);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    const removeHandle = i => {
        removeIncome(i);
    }

  return (
    <div className='Income-item'>
        <button onClick={() => removeHandle(index)}
        >Remove</button>
        <div>{day + "/" + month + "/" + year}</div>
        <div>₹{income.price}</div>
        <div>{income.desc}</div>
    </div>
  )
}

export default IncomeItem;