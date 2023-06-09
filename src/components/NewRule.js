import React, { useEffect, useId, useState } from "react";
import RuleOptions from "./RuleOptions";
import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";
import NewConditionBtn from "./NewConditionBtn";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";

const NewRule = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length < 5) {
      setInputError("This field is required");
    } else {
      setInputError(null);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length >= 5) {
    } else {
      setInputError("This field is required");
    }
    localStorage.setItem("model title", inputValue);
  };
  const modelId = useId();

  const [active, setActive] = useState(false);
  const newCondition = () => {
    if (active == true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div className="exitingRule-container">
      <form onSubmit={handleSubmit}>
        <div className="edit-text">
          <div className="rule-header">
            <div>
              <h2>New Rule</h2>
            </div>
          </div>
          <p>
            Create rules that loan applications must meet for approval or
            dismissal
          </p>
        </div>

        <div className="select-option">
          <label>Model Title</label>
          <input
            id={modelId}
            name="title"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            //   {...register("title", { required: true })}
          />
          {/* {errors.title && (
            <p className="errorMsg">Kindly input a model title</p>
          )} */}
          {inputError && <p className="errorMsg">{inputError}</p>}
        </div>
        <div>
          <div className="select-option-below">
            <RuleOptions />
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
              id="condition"
              // {...register("condition", { required: true })}
            />
            All conditions must be met
          </div>
          <div>
            <input
              className="conditionsMet"
              type="radio"
              name="condition"
              id="condition"
              // {...register("condition", { required: true })}
            />
            Any of the conditions can be met
          </div>
        </div>
        <button className="save-btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewRule;
