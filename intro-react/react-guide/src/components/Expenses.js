import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const items = props.items;

  return (
    <div className='expenses'>
      <ExpenseItem
        title={items[0].title}
        price={items[0].price}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        price={items[1].price}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        price={items[2].price}
        date={items[2].date}
      />
    </div>
  );
}

export default Expenses;
