import Expenses from "./components/Expenses/Expenses";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import NewExpense from "./components/NewExpense/NewExpense";
import "./components/NavigationBar/NavigationBar.css";

const App = () => {
  const expenses = [
    { id: "e1", title: "Car Insurance", amount: "$300", date: new Date(2023, 1, 23) },
    { id: "e2", title: "Toilet paper", amount: "$3", date: new Date(2021, 2, 28) },
    { id: "e3", title: "Car rapair", amount: "$689", date: new Date(2021, 3, 2) },
    { id: "e4", title: "School", amount: "$240", date: new Date(2022, 6, 15) },
    { id: "e5", title: "Birthday", amount: "$65", date: new Date(2022, 7, 12) },
    { id: "e6", title: "Lunch", amount: "$4", date: new Date(2020, 9, 8) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
