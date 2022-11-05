import React from 'react';

import NewExpense from './component/newExpense/NewExpense';
import Expenses from './component/expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 199,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 2999,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 4500,
      date: new Date(2021, 5, 12),
    },
  ];

  const addNewExpenseHandler = newExpense => {
    console.log('In App.js');
    console.log(newExpense);
  };

  // using react DOM
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Lets get started'),
  //   React.createElement(Expenses, { items: expenses }),
  // );

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
