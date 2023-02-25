import ExpenseDate from "./ExpenseDate";
import ExpenceDetails from "./ExpenseDetails";
import "./ExpenseItems.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate Date={props.Date} />
      <div className="expense-item__description">
        <ExpenceDetails
          item={props.item}
          location={props.location}
          price={props.price}
        />
      </div>
    </div>
  );
}

export default ExpenseItem;
