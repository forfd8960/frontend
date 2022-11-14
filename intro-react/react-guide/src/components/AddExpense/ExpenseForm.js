import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("0.01");
  const [inputDate, setInputDate] = useState("");

  const [showForm, setShowForm] = useState(true);

  //   const [userInput, setUserInput] = useState({
  //     inputTitle: "",
  //     inputAmount: "",
  //     inputDate: "",
  //   });

  const titleChangeHdler = (event) => {
    console.log("title changed: ", event.target.value);
    setInputTitle(event.target.value);
    // setUserInput({
    //     ... userInput, // to prevent previous lost of the value of the other fields
    //     inputTitle: event.target.value,
    // });

    // When state update depende on prev state
    // This is safer way to ensure prevState is the latest state snapshort
    // setUserInput((prevState) => {
    //   return { ...prevState, inputTitle: event.target.value };
    // });
  };

  const amountChangeHdler = (event) => {
    console.log("amount changed: ", event.target.value);
    setInputAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   inputAmount: event.target.value,
    // });
  };

  const dateChangeHdler = (event) => {
    console.log("date changed: ", event.target.value);
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   inputDate: event.target.value,
    // });
  };

  const formHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    console.log("User Input: ", expenseData);
    props.onSaveExpenseData(expenseData);

    setInputTitle("");
    setInputAmount("");
    setInputDate("");

    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  };

  const formContent = (
    <div className="add-expense__controls">
      <div className="add-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHdler} value={inputTitle} />
      </div>

      <div className="add-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={inputAmount} // two way binding
          onChange={amountChangeHdler}
        />
      </div>

      <div className="add-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="202-11-01"
          max="2023-12-31"
          value={inputDate}
          onChange={dateChangeHdler}
        />
      </div>
    </div>
  );

  return (
    <form onSubmit={formHandler}>
      {showForm ? formContent : null}
      <div className="add-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
