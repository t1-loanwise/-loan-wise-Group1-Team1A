import React, { useState } from "react";
import RuleOptions from "./RuleOptions";
// import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";
import "../../styles/ExitingRules.css";

const ExitingRule = ({ model, onUpdate }) => {
  // const [active, setActive] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [editedModel, setEditedModel] = useState(model.name);
  const handleUpdate = () => {
    onUpdate(model.id, editedModel);
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="exitingRule-container">
          <div className="edit-text">
            <div className="rule-header">
              <div>
                <h2>Edit Existing Rule</h2>
              </div>
            </div>
            <p id="para">
              Edit existing rules that loan application must meet for approval
              or dismissal
            </p>
          </div>
          <div className="select-option">
            <label>Model Title</label>
            <input
              id="main-input"
              type="text"
              value={editedModel}
              onChange={(e) => setEditedModel(e.target.value)}
            />
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
                name="conditionsMet"
              />
              All conditions must be met
            </div>
            <div>
              <input
                className="conditionsMet"
                type="radio"
                name="conditionsMet"
              />
              Any of the conditions can be met
            </div>
          </div>
          <button className="save-btn" onClick={handleUpdate}>
            Save
          </button>
        </div>
      )}
    </>
  );
};

export default ExitingRule;
