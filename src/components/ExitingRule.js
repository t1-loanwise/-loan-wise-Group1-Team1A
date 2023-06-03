import React from "react";
import Close from "../assets/icons/close-circle.svg";

const ExitingRule = () => {
  return (
    <div className="exitingRule-container">
      <div className="edit-text">
        <div className="rule-header">
          <h2>Edit Exiting Rule</h2>
          <img className="close-btn" src={Close} alt="close" />
        </div>
        <p>
          Edit exiting rules that loan application must meet for approval or
          dismissal
        </p>
      </div>
    </div>
  );
};

export default ExitingRule;
