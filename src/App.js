import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: "$300", date: new Date(2023, 1, 23) },
    { title: "Toilet paper", amount: "$3", date: new Date(2021, 2, 28) },
    { title: "Car rapair", amount: "$689", date: new Date(2021, 3, 2) },
    { title: "School", amount: "$240", date: new Date(2022, 6, 15) },
    { title: "Birthday", amount: "$65", date: new Date(2022, 7, 12) },
    { title: "Lunch", amount: "$4", date: new Date(2020, 9, 8) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
