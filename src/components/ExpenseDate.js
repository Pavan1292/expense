import './ExpenseDate.css'

function ExpenseDate(props){

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "2-digit" });
  const date = props.date.getFullYear();

  return (
    <div>
       <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className ="expense-date__date">{date}</div>
        <div className ="expense-date__year">{year}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;