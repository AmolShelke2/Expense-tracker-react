import React from 'react';

import ExpneseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = props => {
  const clickHandler = () => {
    console.log('Clicked!!');
  };

  return (
    <Card className="expense-item">
      <ExpneseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;

// How component functions are executed
