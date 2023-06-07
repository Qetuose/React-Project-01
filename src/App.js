import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const App = (props) => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: "$300",
      date: new Date(2023, 1, 23),
    },
    {
      id: "e2",
      title: "Toilet paper",
      amount: "$3",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car rapair",
      amount: "$689",
      date: new Date(2021, 3, 2),
    }
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div>
      <NavigationBar/>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
 