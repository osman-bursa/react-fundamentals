import react, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // taking the expenseData sent from ExpenseForm component to 'up' here
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(), // ..adding id to it
        };

        // sending edited data to higher up in the component chain (to App.js)
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;
