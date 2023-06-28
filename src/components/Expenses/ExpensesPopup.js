import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesPopup.css";

const ExpenesPopup = (props, {setPopup}) => {
  const [modal, setModal] = useState(true);
  const toggleModal = () => {
    setModal(!modal);
  };

  if(!modal)
    props.setPopup(false);
  else
    props.setPopup(true);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {console.log(props.items.date)}
            <input type="date" defaultValue={props.items.date.toISOString().substring(0,10)}/>
            <input type="text"  defaultValue={props.items.title}/>
            <input type="number" defaultValue={props.items.amount}/>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpenesPopup;
