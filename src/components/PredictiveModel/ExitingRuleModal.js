import React, { useState } from "react";
import RuleOptions from "./RuleOptions";
import Close from "../../assets/icons/close-circle.svg";
import "../../styles/Popup.css";

const ExitingRuleModal = ({ openModal, setOpenModal, model, onUpdate }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [inputError, setInputError] = useState(null);
  const [editedModel, setEditedModel] = useState(model.name);
  const handleUpdate = () => {
    onUpdate(model.id, editedModel);
    setOpenModal(false);
  };
  const [formData, setFormData] = useState({
    title: "",
    condition: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //  form validation or data processing here

    console.log(formData);
    setOpenModal(false); // Close the modal after form submission
  };
  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="exitingRule-container">
            <form onSubmit={handleSubmit}>
              <div className="popup-inner">
                <button
                  className="close-pop-btn"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  <img src={Close} alt="close" />
                </button>
              </div>
              <div className="edit-text">
                <div className="rule-header">
                  <div>
                    <h2>Edit Existing Rule</h2>
                  </div>
                </div>
                <p id="para">
                  Edit existing rules that loan application must meet for
                  approval or dismissal
                </p>
              </div>

              <div className="select-option">
                <label>Model Title</label>
                <input
                  id="main-input"
                  className="model-input"
                  name="title"
                  type="text"
                  value={editedModel}
                  onChange={(e) => setEditedModel(e.target.value)}
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
                    id="condition1"
                    value="all"
                    checked={formData.condition === "all"}
                    onChange={handleChange}
                  />
                  All conditions must be met
                </div>
                <div>
                  <input
                    className="conditionsMet"
                    type="radio"
                    name="condition"
                    id="condition2"
                    value="any"
                    checked={formData.condition === "any"}
                    onChange={handleChange}
                  />
                  Any of the conditions can be met
                </div>
              </div>
              <button className="save-btn" type="submit" onClick={handleUpdate}>
                save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ExitingRuleModal;
