import React, { useState } from "react";
import RuleOptions from "./RuleOptions";
// import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";

import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const NewRule = (props) => {
  const [showPopup, setShowPopup] = useState(true);

  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (inputValue.length < 5) {
      setInputError("This field is required");
    } else {
      setInputError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setInputError("This field is required");
      return;
    } else {
      setInputError(null);
    }
    setShowPopup(false);
  };
  const handleClick = () => {
    // console.log(`The new task is ${newTask}`)
    props.handleClick(inputValue);
    setInputValue("");
    setShowPopup(false);
    // if (inputValue.length >= 5) {
    // } else {
    //   setInputError("This field is required");
    // }
  };

  return (
    <>
      {showPopup && (
        // Pop-up box content goes here
        <div className="exitingRule-container">
          <form onSubmit={handleSubmit}>
            <div className="edit-text">
              <div className="rule-header">
                <div>
                  <h2>New Rule</h2>
                </div>
              </div>
              <p id="para">
                Create rules that loan applications must meet for approval or
                dismissal
              </p>
            </div>

            <div className="select-option">
              <label>Model Title</label>
              <input
                id="main-input"
                className="model-input"
                name="title"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />

              {inputError && <p className="errorMsg">{inputError}</p>}
            </div>
            <div>
              <div className="select-option-below">
                <RuleOptions />
              </div>
            </div>

            <div className="conditions-container">
              <div>
                <input
                  className="conditionsMet"
                  type="radio"
                  name="condition"
                  id="condition"
                />
                All conditions must be met
              </div>
              <div>
                <input
                  className="conditionsMet"
                  type="radio"
                  name="condition"
                  id="condition"
                />
                Any of the conditions can be met
              </div>
            </div>
            <button className="save-btn" type="submit" onClick={handleClick}>
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default NewRule;
