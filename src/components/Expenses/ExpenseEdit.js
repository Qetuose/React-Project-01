import React, { useState } from "react";

import "./ExpenseEdit.css";

const ExpenseEdit = (isEditingHandler, props) => {
  const [isEditing, setIsEditing] = useState(isEditingHandler);

  const onCancelHandler = (e) => {
    isEditingHandler = false;
    setIsEditing(false);
    
    console.log(e.target.value);
  };

  const onEditHandler = (e) => {
    isEditingHandler = true;
    setIsEditing(true);
  
  };
  
  return (
    <div className="expenses-edit">
      {!isEditing && <button value={isEditingHandler} onClick={onEditHandler}>Edit</button>}
      {isEditing && <button onClick={onCancelHandler}>Cancel</button>}
    </div>
  );
};

export default ExpenseEdit;
