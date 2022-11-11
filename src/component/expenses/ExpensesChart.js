import React from 'react';

import Chart from '../Chart/Chart';
const ExpenseChart = props => {
  const chartDataPoints = [
    { label: 'Jan', value: '' },
    { label: 'Feb', value: '' },
    { label: 'Mar', value: '' },
    { label: 'Apr', value: '' },
    { label: 'May', value: '' },
    { label: 'Jun', value: '' },
    { label: 'Jul', value: '' },
    { label: 'Aug', value: '' },
    { label: 'Sep', value: '' },
    { label: 'Oct', value: '' },
    { label: 'Nov', value: '' },
    { label: 'Dec', value: '' },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
