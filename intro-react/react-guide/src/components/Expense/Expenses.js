import "./Expenses.css";

import React, { useState } from "react";

import ExpenseList from './ExpenseList';
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  console.log("[Expenses.js] props.items: ", props.items);
  const [userSelectYear, setYear] = useState("2022");

  const filterHandler = (year) => {
    console.log("In Expenses.js");
    console.log("User Selected: ", year);
    setYear(year);
  };

  const userFiltedExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === userSelectYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={userSelectYear} onFilter={filterHandler} />
      <ExpenseList items={userFiltedExpense} />
    </Card>
  );
};

export default Expenses;
