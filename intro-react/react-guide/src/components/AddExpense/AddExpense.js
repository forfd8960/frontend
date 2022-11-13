import React from 'react';

import './AddExpense.css';

import ExpenseForm from './ExpenseForm';


const AddExpense = () => {
    return (
        <div className='add-expense'>
            <ExpenseForm></ExpenseForm>
        </div>
    );
}

export default AddExpense;