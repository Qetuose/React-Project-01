import React, {useState} from "react";

import "./NavigationBar.css";

const NavigationBar = (props) => {

  const dashboardHandler = (event) => {
  };

  return (
    <div className="navigation-bar">
      <button value='hidden' onClick={dashboardHandler}>DashBoard</button>
      <button>Second</button>
      <button>Third</button>
      <button>Fourth</button>
    </div>
  );
}

export default NavigationBar;
