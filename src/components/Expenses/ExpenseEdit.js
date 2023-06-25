import React, { useState } from "react";

import "./ExpenseEdit.css";
import Expenses from "./Expenses";

const ExpenseEdit = ({ setEditing }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onEditHandler = () => {
   if(isEditing == true)
      setIsEditing(false);
   else
    setIsEditing(true);

   setEditing(isEditing);
  };
  
  return (
    <div className="expenses-edit">
      {!isEditing && <button onClick={onEditHandler} >Edit</button>}
      {isEditing && <button onClick={onEditHandler} >Cancel</button>}
    </div>
  );
};

export default ExpenseEdit;
