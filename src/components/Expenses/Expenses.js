import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [fillterdYear, setFillteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFillteredYear(selectedYear);
  };
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === fillterdYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={fillterdYear} onChangeFilter = {filterChangeHandler}/>
        {filteredExpenses.map((expense) => (
          <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
