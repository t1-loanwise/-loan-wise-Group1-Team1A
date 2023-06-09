import React, { useState } from "react";
import RuleOptions from "./RuleOptions";
import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";

const NewConditionBtn = () => {
  const [active, setActive] = useState(false);
  const newCondition = () => {
    if (active == true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  return (
    <>
      <div className="select-option-below">
        <RuleOptions />
        <div className="btn">
          <button className="condition-button" onClick={newCondition}>
            <img src={PlusSign} alt="plus" width="14px" />{" "}
            <span>New Condition</span>
          </button>
        </div>
      </div>
      {active && (
        <div className="select-option-below">
          <RuleOptions />
          <div className="btn">
            <button className="condition-button" onClick={newCondition}>
              <img src={PlusSign} alt="plus" width="14px" />{" "}
              <span>New Condition</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewConditionBtn;
