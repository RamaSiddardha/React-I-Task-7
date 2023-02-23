import ExpenceItem from "./components/ExpenceItems";

function App() {
  let expenses = [{ item: "Books", price: 500, location: "Vani Books Store" },{ item: "Car", price: 2000000, location: "Thar Showroom(Hyderabad)" },{ item: "Bike", price: 280000, location: "Royal Enfield Showroom(Hyderabad)" }];
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense)=><ExpenceItem item = {expense.item} price = {expense.price} location = {expense.location}></ExpenceItem>
      )}
      
    </div>
  );
}

export default App;
