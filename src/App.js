import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const addExpenseHandler = (expense) => {
        console.log('appjsjsjs');
        console.log(expense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenseList={expenses} />
        </div>
    );
}

export default App;

// App component has access to both the NewExpense component and Expenses component since it renders both of them.
// We can use App component as a middleware to store a state from NewExpense and transfer it to Expenses for example.
// With this way we can communicate between components that are at the same level of component hierarcy.
// Appearently this process is called 'Lifting state up'
