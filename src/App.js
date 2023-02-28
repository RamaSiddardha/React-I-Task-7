import Expense from "./components/Expense";

function App() {
  let expenses = [
    {
      item: "Books",
      price: 500,
      location: "Vani Books Store",
      date: new Date(2022, 10, 25),
    },
    {
      item: "Car",
      price: 2000000,
      location: "Thar Showroom(Hyderabad)",
      date: new Date(2022, 11, 11),
    },
    {
      item: "Bike",
      price: 280000,
      location: "Royal Enfield Showroom(Hyderabad)",
      date: new Date(2022, 10, 25),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
<Expense expenses={expenses}></Expense>
    </div>
  );
}

export default App;
