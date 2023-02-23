import "./ExpenceItems.css";

function ExpenceItem(props) {
  return (
    <div>
      <div className="expense-item">
        <div className="expense-item__description">
          <h2>{props.item}</h2>{" "}
        </div>
        <div> {props.location}---</div>
        <div className="expense-item__price">Rs{props.price} </div>
      </div>
    </div>
  );
}

export default ExpenceItem;
