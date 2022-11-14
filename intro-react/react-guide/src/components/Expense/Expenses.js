import "./Expenses.css";

import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [userSelectYear, setYear] = useState('2022');

  const filterHandler = (year) => {
    console.log("In Expenses.js");
    console.log("User Selected: ", year);
    setYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={userSelectYear} onFilter={filterHandler} />

      {props.items.map((item, i) => (
        <ExpenseItem
          title={item.title}
          price={item.price}
          date={item.date}
          key={i}
        />
      ))}
    </Card>
  );
};

export default Expenses;
