import React, { useState} from "react";
import "./TestGrounds.css";
import App from "../../App";

const TestGround = (props) => {
  
    let [enteredValue, setValue] = useState(false);

    const clickHandler = () => {
        if(enteredValue == false)
            setValue(true);
        else
            setValue(false);
    };

    return(
        <div className="container">
            <button onClick={clickHandler}>asdasd</button>
           <div hidden={enteredValue}>
                <h1> U see me</h1>
                safasfasfa
           </div>
        </div>
    );
};

export default TestGround;