import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
//   const [inputTitle, setInputTitle] = useState("");
//   const [inputAmount, setInputAmount] = useState("0.01");
//   const [inputDate, setInputDate] = useState("");

    const [userInput, setUserInput] = useState({
        inputTitle: '',
        inputAmount: '',
        inputDate: '',
    });

  const titleChangeHdler = (event) => {
    console.log("title changed: ", event.target.value);
    setUserInput({
        ... userInput, // to prevent previous lost of the value of the other fields
        inputTitle: event.target.value,
    });
  };

  const amountChangeHdler = (event) => {
    console.log("amount changed: ", event.target.value);
    setUserInput({
        ...userInput,
        inputAmount: event.target.value
    });
  };

  const dateChangeHdler = (event) => {
    console.log("date changed: ", event.target.value);
    setUserInput({
        ...userInput,
        inputDate: event.target.value
    });
  };

  return (
    <form>
      <div className="add-expense__controls">
        <div className="add-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHdler} />
        </div>

        <div className="add-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHdler}
          />
        </div>

        <div className="add-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="202-11-01"
            max="2023-12-31"
            onChange={dateChangeHdler}
          />
        </div>
      </div>
      <div className="add-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
