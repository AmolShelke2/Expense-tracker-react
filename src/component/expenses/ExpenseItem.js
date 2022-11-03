import React from 'react';

import ExpneseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = props => {
  let title = props.title;

  const clickHandler = () => {
    title = 'Clicked';
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpneseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
