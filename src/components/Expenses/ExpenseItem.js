import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { VscSaveAs } from "react-icons/vsc";

const ExpenseItem = (props) => {
  let Editing = props.Editing;
  if (Editing) {
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <input className="expense-item__input-description" type="text" placeholder={props.title}></input>
        <input className="expense-item__input-price" type="number" placeholder={props.amount}></input>
        <VscSaveAs className="expense-item__save-icon" size="1.5rem" />
      </Card>
    );
  } else {
    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    );
  }
};

export default ExpenseItem;
