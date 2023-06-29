import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

function CompleteModal({ closeCompleteModal, setIsOpen }) {
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading flex flex-col">
              <span className="text-sky-500">Completed</span>
              <FaCheckSquare className="self-center h-10 w-10 text-sky-500" />
            </h5>
          </div>
          <button className="closeBtn" onClick={closeCompleteModal}>
            <FaWindowClose className="-mb-0.5"/>
          </button>
          <div>
            Thank you for purchasing your Travel Insurance with Britam. We will
            get back to you shortly
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteModal;
