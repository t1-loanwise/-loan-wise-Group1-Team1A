import React from "react";
import Close from "../assets/icons/close-circle.svg";
import RuleOptions from "./RuleOptions";
import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";
import "../styles/ExitingRules.css";

const ExitingRule = () => {
  return (
    <div className="exitingRule-container">
      <div className="edit-text">
        <div className="rule-header">
          <div>
            <h2>Edit Exiting Rule</h2>
          </div>
        </div>
        <p>
          Edit exiting rules that loan application must meet for approval or
          dismissal
        </p>
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

export default ExitingRule;
