import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {
    const expenses = props.expenseList;
    const [selectedYear, setSelectedYear] = useState('2020');

    const expenseFilterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear); // store/set the selectedYear in the state.
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={selectedYear} onExpenseFilterChange={expenseFilterChangeHandler} />
                {props.expenseList.map((expense) => (
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;
