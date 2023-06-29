import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesPopup.css";

const ExpenesPopup = (props, { setPopup }) => {
  const [modal, setModal] = useState(true);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (!modal) props.setPopup(false);
  else props.setPopup(true);

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
            <div className="modal-date">
            <label>Date : </label>
              <input
                type="date"
                defaultValue={props.items.date.toISOString().substring(0, 10)}
              />
            </div>
            <div className="modal-title">
              <label>Title : </label>
              <input type="text" defaultValue={props.items.title} />
            </div>
            <div className="modal-amount">
            <label>Amount : </label>
            <input type="number" defaultValue={props.items.amount} />
            </div>

            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
            <button className="save-modal">Save</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpenesPopup;
