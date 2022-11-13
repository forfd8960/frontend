import logo from './logo.svg';
import './App.css';

import Expenses from './components/Expense/Expenses';

import AddExpense from './components/AddExpense/AddExpense';


const App = () => {
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
       <AddExpense />
       <Expenses items={expenses}/>
      
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
