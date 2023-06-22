import React, { useState } from "react";
import RuleOptions from "./RuleOptions";
import Close from "../../assets/icons/close-circle.svg";
import "../../styles/Popup.css";

const NewRuleModal = (props) => {
  const [inputError, setInputError] = useState(null);
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
    if (formData.title.trim() === "") {
      setInputError("This field is required");
      return;
    } else {
      setInputError(null);
    }

    console.log(formData);
    props.setOpenModal(false); // Close the modal after form submission
  };
  const handleClick = () => {
    // console.log(`The new task is ${newTask}`)
    props.handleClick(formData);
    setFormData("");
    props.setOpenModal(false);
  };

  return (
    <div className="popup">
      <div className="exitingRule-container">
        <form onSubmit={handleSubmit}>
          <div className="popup-inner">
            <button
              className="close-pop-btn"
              onClick={() => {
                props.setOpenModal(false);
              }}
            >
              <img src={Close} alt="close" />
            </button>
          </div>
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
            <label>Model Title</label>
            <input
              id="main-input"
              className="model-input"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
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
          <button className="save-btn" type="submit" onclick={handleClick}>
            save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRuleModal;
