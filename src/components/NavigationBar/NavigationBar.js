import React, { useState } from "react";

import Card from "../UI/Card";
import "./NavigationBar.css";

const NavigationBar = (props) => {
  const dashboardHandler = (event) => {};

  return (
    <Card className={'navigation-bar'}>
      <button>Expenses</button>
      <button>Planner</button>
      <button>Statistics</button>
    </Card>
  );
};

export default NavigationBar;
