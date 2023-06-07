import React, { useState } from "react";
import RuleOptions from "./RuleOptions";
import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";
import NewConditionBtn from "./NewConditionBtn";

const NewRule = () => {
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
        <input id="title" name="title" type="text" />
      </div>
      <div>
        <div className="select-option-below">
          <RuleOptions />
          <div className="btn">
            <button className="condition-button" onClick={newCondition}>
              <img src={PlusSign} alt="plus" width="14px" />{" "}
              <span>New Condition</span>
            </button>
          </div>
        </div>
        {active && <NewConditionBtn />}
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
      <button className="save-btn" type="submit">
        Save
      </button>
    </div>
  );
};

export default NewRule;
