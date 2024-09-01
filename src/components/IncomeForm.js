import React, { useRef } from 'react';

const IncomeForm = ({ income, setIncome }) => {
    const desc = useRef(null);
    const price = useRef(null);
    const date = useRef(null);

    const AddIncome = e => {
        e.preventDefault();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);

        setIncome([...income, {
            "desc": desc.current.value,
            "price": price.current.value,
            "date": newD.getTime()
        }]);

        desc.current.value = "";
        price.current.value = null;
        date.current.value = null;
    }


  return (
    <form onSubmit={AddIncome} className="Income-form">
        <input type="text" name="desc" id="desc" placeholder='Description' ref={desc} />
        <input type="number" name="price" id="price" placeholder='Amount' ref={price} />
        <input type="date" name="date" id="date" ref={date} />
        <input type="submit" name="" id="submit-button" value="Add Income/Expense" />
    </form>
  )
}

export default IncomeForm;