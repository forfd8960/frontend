import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpenseItem';


function App() {
  const expenses = [
    {
      id: "id1",
      title: "Youtube Fee",
      price: 10,
      date: new Date(2022, 11, 2)
    },
    {
      id: "id2",
      title: "VPN",
      price: 5,
      date: new Date(2022, 11, 8)
    },
    {
      id: "id3",
      title: "VPS",
      price: 5,
      date: new Date(2022, 11, 10)
    },
  ];

  return (
    <div className="App">
       <ExpenseItem title = {expenses[0].title} price={expenses[0].price} date={expenses[0].date} />
       <ExpenseItem title = {expenses[1].title} price={expenses[1].price} date={expenses[0].date} />
       <ExpenseItem title = {expenses[2].title} price={expenses[2].price} date={expenses[0].date} />
      
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
}

export default App;
