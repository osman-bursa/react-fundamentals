import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

function Expenses(props) {
    const expenses = props.expenseList;
    const [selectedYear, setSelectedYear] = useState('');

    const expenseFilterChangeHandler = (selectedYear) => {
        console.log(selectedYear); // log the data to check
        setSelectedYear(selectedYear); // store the selectedYear in the state.
    };

    return (
        <div>
            <ExpenseFilter onExpenseFilterChange={expenseFilterChangeHandler} />
            <Card className='expenses'>
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />

                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />

                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />

                <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
            </Card>
        </div>
    );
}

export default Expenses;
