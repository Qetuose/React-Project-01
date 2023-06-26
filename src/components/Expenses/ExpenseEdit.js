import React, { useState } from "react";

import "./ExpenseEdit.css";


const ExpenseEdit = ({ setEditing }) => {
  const [isEditing, setIsEditing] = useState(false);
  setEditing(isEditing);
  const onEditHandler = () => {
   if(isEditing === true)
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
