import React from "react";
import Delete from "../assets/icons/trash.svg";
import ExitingRule from "./ExitingRule";
import RuleOptions from "./RuleOptions";
import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";

const NewRule = () => {
  return (
    <div className="exitingRule-container">
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
        <input type="text" />
      </div>
      <div className="select-option-below">
        <RuleOptions />
        <div className="btn">
          <button className="condition-button">
            <img src={PlusSign} alt="plus" width="14px" />{" "}
            <span>New Condition</span>
          </button>
        </div>
      </div>
      <div className="conditions-container">
        <div>
          <input className="conditionsMet" type="radio" name="conditionsMet" />
          All conditions must be met
        </div>
        <div>
          <input className="conditionsMet" type="radio" name="conditionsMet" />
          Any of the conditions can be met
        </div>
      </div>
      <button className="save-btn" type="submit">
        Save
      </button>
    </div>
  );
};

export default NewRule;
