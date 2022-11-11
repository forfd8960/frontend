import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const items = props.items;

  return (
    <div className="expenses">
      {items.map((item, i) => (
        <ExpenseItem title={item.title} price={item.price} date={item.date} key = {i}/>
      ))}
    </div>
  );
}

export default Expenses;
