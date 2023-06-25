import React, {useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { VscSaveAs } from "react-icons/vsc";
import Expenses from "./Expenses";
import ExpenseEdit from "./ExpenseEdit";

const ExpenseItem = (props, { Editing }) => {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      {!props.Editing && <VscSaveAs className="expense-item__save-icon" size='1.5rem'/>}
    </Card>
  );
};

export default ExpenseItem;
