import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpenseEdit from "./ExpenseEdit";
import "./Expenses.css";

const Expenses = (props) => {
  const [fillterdYear, setFillteredYear] = useState("2023");
  const [Editing, setEditing] = useState(); 
  const filterChangeHandler = (selectedYear) => {
    setFillteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === fillterdYear;
  });
 
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={fillterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense={filteredExpenses} />
        <ExpenseEdit setEditing={setEditing} />
        <ExpensesList items={filteredExpenses} Editing={Editing}/>
      </Card> 
    </li>
  );
};

export default Expenses;
