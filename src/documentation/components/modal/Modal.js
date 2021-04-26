import React, { useState } from "react";
import Button from "../button/Button";
import close from "./images/close.svg";
import "./modal.css";
const Modal = ({ heading, message, btn1, btn2, customTrigger,triggerBtnText }) => {
  const [trigger, triggerSetter] = useState(false);

  function trigerHandler() {
    triggerSetter((val) => !val);
  }

  function btn1CLickHandler() {
    btn1 && btn1.clickHandler && btn1?.clickHandler();
    trigerHandler();
  }

  function btn2CLickHandler() {
    btn2 && btn2.clickHandler && btn2?.clickHandler();
    trigerHandler();
  }

  return (
    <div>
      {customTrigger ? (
        <span
          onClick={() => {
            trigerHandler();
          }}
          className="customTrigger"
        >
          {customTrigger}
        </span>
      ) : (
        <button
          onClick={() => {
            trigerHandler();
          }}
          className="btn btn-primary"
        >
          {triggerBtnText?triggerBtnText:'show Modal'}
        </button>
      )}

      <div className={`modal-container modal-${trigger ? "show" : "hide"}`}>
        <div className="modal">
          <img
            src={close}
            className="modal-close-trigger"
            onClick={trigerHandler}
          />
          {heading && (
            <div className="modal-heading">
              <p>{heading}</p>
            </div>
          )}

          {message && (
            <div className="modal-content">
              <p>content</p>
            </div>
          )}

          <div className="modal-btn-container">
            {btn1 && (
              <button
                className={`btn btn-${btn1?.type ? btn1.type : "primary"}`}
                onClick={btn1CLickHandler}
              >
                {btn1?.text}
              </button>
            )}
            {btn2 && (
              <button
                className={`btn btn-${btn2?.type ? btn2.type : "secondary"}`}
                onClick={btn2CLickHandler}
              >
                {btn2?.text}
              </button>
            )}

            {/* <Button text="Primary" type="primary" />
            <Button text="Secondary" type="secondary" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
