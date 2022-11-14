import "./Expenses.css";

import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
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

  let expenseContent = <p>Expense Not Found</p>;
  if (userFiltedExpense.length > 0) {
    expenseContent = userFiltedExpense.map((item) => (
      <ExpenseItem
        date={item.date}
        title={item.title}
        amount={item.amount}
        key={item.id}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={userSelectYear} onFilter={filterHandler} />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
