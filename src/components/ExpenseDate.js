function ExpenseDate(props) {
  let month = props.Date.toLocaleString("en-US", { month: "long" });
  let day = props.Date.toLocaleString("en-US", { day: "short" });
  let year = props.Date.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
