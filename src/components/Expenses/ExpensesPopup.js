import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesPopup.css";

const ExpenesPopup = (props) => {
  const [modal, setModal] = useState(true);
  const toggleModal = () => {
    setModal(!modal);
  };

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
