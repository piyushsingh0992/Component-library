import React, { useState } from "react";

import "./stepper.css";

import check from "./images/check.svg";
import Button from "../button/Button.js";

const Stepper = ({ taskArray }) => {
  const [task, taskSetter] = useState(0);
  const [newtaskArray, newtaskArraySetter] = useState(
    taskArray?.map((item) => {
      return {
        text: item,
        done: false,
      };
    })
  );

  function taskHandler1() {
    if (task >= newtaskArray.length) {
      return;
    }
    taskSetter((value) => value + 1);
    newtaskArraySetter(
      newtaskArray?.map((item, index) => {
        if (index === task) {
          return { ...item, done: true };
        } else {
          return item;
        }
      })
    );
  }

  function taskHandler2() {

    if (task < 0) {
      return;
    }

    taskSetter((value) => value - 1);

    newtaskArraySetter(
      newtaskArray?.map((item, index) => {
        if (index === task - 1) {

          return { ...item, done: false };
        } else {

          return item;
        }
      })
    );
  }

  return (
    <div className="stepper">
      <div className="stepper-main-body">
        {newtaskArray?.map((item, index) => {
          return (
            <div className="stepper-task-container">
              <div className="stepper-task-connector-container">
                <div
                  className={item.done ? "stepper-icon-done" : "stepper-icon"}
                >
                  {item.done ? (
                    <img src={check} className="steper-check-icon" />
                  ) : (
                    <p>{index}</p>
                  )}
                </div>
                {newtaskArray.length < 1 ||
                newtaskArray.length - 1 <= index ? null : (
                  <div className="stepper-task-connector"></div>
                )}
              </div>
              <p className={item.done ? "stepper-text-done" : "stepper-text"}>
                {item.text}
              </p>
              {item.done && <p className="stepper-done-indicator">Done</p>}
            </div>
          );
        })}
      </div>
      <div className="stepper-button-container">
        <button
          className="btn btn-secondary "
          onClick={() => {
            taskHandler2();
          }}
        >
          Back
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            taskHandler1();
          }}
        >
          Task Completed
        </button>
      </div>
    </div>
  );
};

export default Stepper;
