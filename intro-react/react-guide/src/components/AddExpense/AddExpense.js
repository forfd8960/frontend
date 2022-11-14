import React from 'react';

import './AddExpense.css';

import ExpenseForm from './ExpenseForm';


const AddExpense = (props) => {
    const saveExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString()
        };

        console.log('AddExpense: ', expenseData);
        props.onAddExpense(expenseData);
    }
    return (
        <div className='add-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}

export default AddExpense;