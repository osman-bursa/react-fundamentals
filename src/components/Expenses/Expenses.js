import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2020');

    const expenseFilterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear); // store/set the selectedYear in the state.
    };

    const filteredExpenses = props.expenseList.filter((e) => e.date.getFullYear().toString() === selectedYear);

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={selectedYear} onExpenseFilterChange={expenseFilterChangeHandler} />

                {filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;
