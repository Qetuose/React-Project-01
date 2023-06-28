import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenesPopup from "./ExpensesPopup";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { VscSaveAs } from "react-icons/vsc";

const ExpenseItem = (props) => {
  const [popup, setPopup] = useState(false);

  const items = props.expense;
  let Editing = props.Editing;

  const popupHandler = () => {
    if(Editing === true)
      setPopup(true);
  };

  return (
    <div onClick={popupHandler}>
      {Editing && popup && (<ExpenesPopup items={items} setPopup = {setPopup}/>)}
      <Card className={`expense-item ${Editing ? "expense-item-selected" : ""}`} >
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
        {Editing && (<VscSaveAs className="expense-item__save-icon" size="1.5rem" />)}
      </Card>
    </div>
  );
};

export default ExpenseItem;
