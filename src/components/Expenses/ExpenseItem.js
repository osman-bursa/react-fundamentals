import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // useState: First parameter is the variable , second parameter is the function that updates the first parameter.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');

    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} amount={props.amount} title={props.title} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

// At the onClick event we only point at the function without invoking it. The main reason for that is we do not want to call the function when that line of code is parsed by JSX, rather we want to use it when the event occurs. Thus we dont add the parantheses such as 'clickHandler()'.
