import React, { useState } from "react";
import RuleOptions from "./RuleOptions";
import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";
import "../styles/ExitingRules.css";
import NewConditionBtn from "./NewConditionBtn";

const ExitingRule = () => {
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
      <div className="select-option">
        <label>Model Title</label>
        <select>
          <option value="">Select exiting rule</option>
          <option value="1">Bank Statement Name March</option>
          <option value="2">Spending Pattern</option>
          <option value="3">Cash Flow Pattern</option>
        </select>
      </div>

      <div>
        <div className="select-option-below">
          <RuleOptions />
          {active && <NewConditionBtn />}
          <div className="btn">
            <button
              type="submit"
              className="condition-button"
              onClick={newCondition}
            >
              <img src={PlusSign} alt="plus" width="14px" />{" "}
              <span>New Condition</span>
            </button>
          </div>
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
