import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import NavigationBar from "../NavigationBar/NavigationBar";

const NewExpense = (props) => {

  const saveExpenseDataHandler = (eneterdExpenseData) => {
    const expenseData = {
      ...eneterdExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
