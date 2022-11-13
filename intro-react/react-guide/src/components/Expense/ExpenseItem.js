import React, {useState} from 'react';

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);

  const clickHandler = () => {
    setTitle(title + " Updated!");
    setPrice(price + 1);
    console.log(title + " Updated!");
    console.log("and Price Updated!");
  }

  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}/>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
}

export default ExpenseItem;
