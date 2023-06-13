import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import ExpenseEdit from "./ExpenseEdit";

const Expenses = (props) => {
  const [fillterdYear, setFillteredYear] = useState("2023");
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingDataBack, setIsEditingDataBack] = useState();

  const filterChangeHandler = (selectedYear) => {
    setFillteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === fillterdYear;
  });

  const isEditingHandler = (edit) => {
    setIsEditing(edit);
    console.log(edit);
  };
  
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={fillterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <button>test</button>
        <ExpensesChart expense={filteredExpenses} />
        <ExpenseEdit isEditingHandler={isEditingHandler} dataBack={setIsEditingDataBack}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
