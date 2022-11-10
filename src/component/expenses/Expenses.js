import React, { useState } from 'react';
import Card from '../UI/Card';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filteredChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No expense found</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map(item => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filteredChangeHandler}
      />
      {expenseContent}
    </Card>
  );
}

export default Expenses;
