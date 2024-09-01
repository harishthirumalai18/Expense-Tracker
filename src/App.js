import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";


const App = () => {

  const [income, setIncome] = useState([]);
  /* {
      desc: "Friday Shop",
      price: "25",
      date: "05" + "/" + "12" + "/" + "1999"
    },
    {
      desc: "Thursday Shop",
      price: "25",
      date: "05" + "/" + "11" + "/" + "1999"
    }
    */
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const savedExpense = JSON.parse(
      localStorage.getItem('income-tracker-data'));
    if (savedExpense) {
      setIncome(savedExpense);
      console.log('test');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('income-tracker-data', 
    JSON.stringify(income));
    console.log('test2');
  }, [income]);


  
  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }
    setTotalIncome(temp);
  }, [income]);

  return (
    <div className="App">
      <Header totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome} />
      <IncomeList income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
