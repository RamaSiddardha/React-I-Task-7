import ExpenseDate from "./ExpenseDate";
import ExpenceDetails from "./ExpenseDetails";
import "./ExpenseItems.css";
import Card from "./Card";

function ExpenseItem(props) {

  let DeleteItem = (e) =>{
    let expenseItem = e.target
  expenseItem.parentElement.remove()
  }

  return (
    <Card> <div className="expense-item"> 
      <ExpenseDate Date={props.Date} />
        <ExpenceDetails
          item={props.item}
          location={props.location}
          price={props.price}
        />
        <button onClick = {DeleteItem}>Delete</button>
        </div>
    </Card>
  );
}

export default ExpenseItem;
