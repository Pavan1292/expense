import './ExpenseItem.css'


function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        <h2>{props.date.toISOString()}</h2>
      </div>
      <div className ="expense-item__description"> 
        <h2>{props.ExpenseItem}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
