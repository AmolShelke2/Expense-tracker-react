import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>28 oct 22</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">10,000</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
