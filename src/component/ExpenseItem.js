import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 3, 28);
  const expenseTitle = "Car Insurance";
  const expnseAmount = 289.7;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expnseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

// Passing Data via Props
