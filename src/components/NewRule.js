import React, { useState } from "react";
import RuleOptions from "./RuleOptions";
import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";
import NewConditionBtn from "./NewConditionBtn";
import Delete from "../assets/icons/trash.svg";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const NewRule = (props) => {
  const [showPopup, setShowPopup] = useState(true);

  const [inputValue, setInputValue] = useState("");
  const [variable, setVariable] = useState("");
  const [operator, setOperator] = useState("");
  const [value2, setValue2] = useState("");
  // const [checked, setChecked] = useState("");
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
    if (inputValue.length < 5) {
      setInputError("This field is required");
    } else {
      setInputError("");
    }
  };
  const handleClick = () => {
    // console.log(`The new task is ${newTask}`)
    props.handleClick(inputValue, variable, operator, value2);
    setInputValue("");
    setOperator("");
    setVariable("");
    setValue2("");
    setShowPopup(false);
    if (inputValue.length < 5) {
      setInputError("This field is required");
    } else {
      setInputError("");
    }
  };

  const [active, setActive] = useState(false);
  const newCondition = () => {
    if (active == false) {
      setActive(true);
    } else {
      setActive(true);
    }
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
              <label htmlFor="main-input">Model Title</label>
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
                <div className="rule-options">
                  <div className="main-container">
                    <div className="variable-container">
                      <label htmlFor="variable">Variable</label>
                      <div className="select">
                        <select
                          id="variable"
                          value={variable}
                          onChange={(e) => setVariable(e.target.value)}
                        >
                          <option value="">Select</option>
                          <option value="1">Bank Statement Name Match</option>
                          <option value="2">Average balance</option>
                          <option value="3">Closing balance</option>
                          <option value="4">Account Activity</option>
                          <option value="5">
                            Number of Credit Transactions
                          </option>
                          <option value="6">
                            Number of Debit Transactions
                          </option>
                          <option value="7">Number of other loan amount</option>
                          <option value="8">
                            Number of Transacting months
                          </option>
                          <option value="9">Average Salary</option>
                          <option value="10">Total Debit Turnover</option>
                          <option value="11">Total Credit Turnover</option>
                          <option value="12">Current Closing Balance</option>
                          <option value="13">Salary Frequency</option>
                        </select>
                      </div>
                      <div>
                        <select name="variable">
                          <option value="">Select</option>
                          <option value="1">Bank Statement name match</option>
                          <option value="2">Average balance</option>
                          <option value="3">Closing balance</option>
                          <option value="4">Account Activity</option>
                          <option value="5">
                            Number of Credit Transactions
                          </option>
                          <option value="6">
                            Number of Debit Transactions
                          </option>
                          <option value="7">Number of other loan amount</option>
                          <option value="8">
                            Number of Transacting months
                          </option>
                          <option value="9">Average Salary</option>
                          <option value="10">Total Debit Turnover</option>
                          <option value="11">Total Credit Turnover</option>
                          <option value="12">Current Closing Balance</option>
                          <option value="13">Salary Frequency</option>
                        </select>
                      </div>
                    </div>
                    <div className="Operator-container">
                      <label htmlFor="operator">Operator</label>
                      <div className="select">
                        <select
                          id="operator"
                          value={operator}
                          onChange={(e) => setOperator(e.target.value)}
                        >
                          <option value="">Select</option>
                          <option value="1">Less than</option>
                          <option value="2">Less than or equal to</option>
                          <option value="3">Greater than</option>
                          <option value="4">Greater than or equal to</option>
                          <option value="5">Equal to</option>
                          <option value="6">Tally with</option>
                        </select>
                      </div>
                      <select>
                        <option value="">Select</option>
                        <option value="1">Less than</option>
                        <option value="2">Less than or equal to</option>
                        <option value="3">Greater than</option>
                        <option value="4">Greater than or equal to</option>
                        <option value="5">Equal to</option>
                        <option value="6">Tally with</option>
                      </select>
                    </div>
                    <div className="value">
                      <label htmlFor="value2">Value</label>
                      <div>
                        <input
                          type="text"
                          placeholder="input"
                          id="value2"
                          name="value2"
                          value={value2}
                          onChange={(e) => setValue2(e.target.value)}
                        />
                        <div className="delete-btn-container">
                          <div className="delete">
                            <p>Delete</p>
                            <span>
                              <img
                                src={Delete}
                                alt="Delete"
                                width="18px"
                                height="18px"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <input type="text" placeholder="input" name="value" />
                        <div className="delete-btn-container">
                          <div className="delete">
                            <p>Delete</p>
                            <span>
                              <img
                                src={Delete}
                                alt="Delete"
                                width="18px"
                                height="18px"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {active && <NewConditionBtn />}

                <div className="btn">
                  <button className="condition-button" onClick={newCondition}>
                    <img src={PlusSign} alt="plus" width="14px" />{" "}
                    <span>New Condition</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="conditions-container">
              <div>
                <input
                  className="conditionsMet"
                  type="radio"
                  name="condition"
                  id="condition1"
                />
                All conditions must be met
              </div>
              <div>
                <input
                  className="conditionsMet"
                  type="radio"
                  name="condition"
                  id="condition2"
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
