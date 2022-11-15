import React, { useState } from 'react';

import './AddExpense.css';

import ExpenseForm from './ExpenseForm';


const AddExpense = (props) => {
    const [isEdit, setIsEdit] = useState(false);

    const saveExpenseDataHandler = (inputExpenseData) => {
        const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString()
        };

        console.log('AddExpense: ', expenseData);
        props.onAddExpense(expenseData);
    }

    const addnewExpenseHandler = () => {
        setIsEdit(true);
    }

    const onCancelHandler = () => {
        setIsEdit(false);
    }

    return (
        <div className='add-expense'>
            {!isEdit && <button onClick={addnewExpenseHandler}>Add New Expense</button>}
            {isEdit && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={onCancelHandler} />}
        </div>
    );
}

export default AddExpense;