import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2020');

    const expenseFilterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filteredExpenses = props.expenseList.filter((e) => e.date.getFullYear().toString() === selectedYear);

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={selectedYear} onExpenseFilterChange={expenseFilterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;
