import logo from "./logo.svg";
import "./App.css";

import React, { useState } from 'react';


import Expenses from "./components/Expense/Expenses";
import AddExpense from "./components/AddExpense/AddExpense";

const INIT_EXPENSES = [
  {
    id: "id1",
    title: "Youtube Fee",
    amount: 10,
    date: new Date(2022, 11, 2),
  },
  {
    id: "id2",
    title: "VPN",
    amount: 5,
    date: new Date(2022, 11, 8),
  },
  {
    id: "id3",
    title: "VPS",
    amount: 5,
    date: new Date(2022, 11, 10),
  },
];


const App = () => {
  const [expensesData, setExpensesData] = useState(INIT_EXPENSES); 

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log("expense: ", expense);
    setExpensesData((prevExpeneses) => {
      return [expense, ...prevExpeneses];
    });
  };

  console.log("expensesData: ", expensesData);

  return (
    <div className="App">
      <AddExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesData} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Oh hahaha</p>
        <button>This is a btn</button>
      </header>
    </div>
  );
};

export default App;
