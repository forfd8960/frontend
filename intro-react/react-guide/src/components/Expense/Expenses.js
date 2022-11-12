import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const items = props.items;

  return (
    <Card className="expenses">
      {items.map((item, i) => (
        <ExpenseItem title={item.title} price={item.price} date={item.date} key = {i}/>
      ))}
    </Card>
  );
}

export default Expenses;
