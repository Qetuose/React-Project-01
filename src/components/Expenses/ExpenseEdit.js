import React, { useState } from "react";

import ToggleSwitch from "../UI/ToggleSwitch";
import "./ExpenseEdit.css";


const ExpenseEdit = ({ setEditing }) => {
  const [isEditing, setIsEditing] = useState(false);
  setEditing(isEditing);
  
  return (
    <div className="expenses-edit">
          <label>Edit :</label>
          <ToggleSwitch setIsEditing={setIsEditing}/>
    </div>
  );
};

export default ExpenseEdit;
