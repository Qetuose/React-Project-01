import React from "react";

import "./ToggleSwitch.css";

const ToggleSwitch = ({ setIsEditing }) => {
  const checkboxHandler = (event) => {
    setIsEditing(event.target.checked);
  };

  return (
    <label class="switch">
      <input type="checkbox" onChange={checkboxHandler} />
      <span class="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
