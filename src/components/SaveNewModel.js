import React, { useState } from "react";
import PopUp from "../components/PopUp";
import ToggleSwitch from "./ToggleSwitch";
import EditButton from "../assets/icons/edit.svg";
import ExitingRule from "./ExitingRule";

const SaveNewModel = () => {
  const [buttonPop, setButtonPopup] = useState("false");
  return (
    <div>
      SaveNewModel
      <div className="content">
        <div className="Model">Bank statement Name March</div>
        <div className="Toggle-btn">
          <ToggleSwitch />
          <div className="edit-btn">
            <button onClick={() => setButtonPopup(true)}>
              <img src={EditButton} alt="edit" />
            </button>
            <PopUp trigger={buttonPop} setTrigger={setButtonPopup}>
              <ExitingRule />
            </PopUp>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="Model">Behavioral Pattern</div>
        <div className="Toggle-btn">
          <ToggleSwitch />
          <div className="edit-btn">
            <button onClick={() => setButtonPopup(true)}>
              <img src={EditButton} alt="edit" />
            </button>
            <PopUp trigger={buttonPop} setTrigger={setButtonPopup}>
              <ExitingRule />
            </PopUp>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="Model">Spending Pattern</div>
        <div className="Toggle-btn">
          <ToggleSwitch />
          <div className="edit-btn">
            <button onClick={() => setButtonPopup(true)}>
              <img src={EditButton} alt="edit" />
            </button>
            <PopUp trigger={buttonPop} setTrigger={setButtonPopup}>
              <ExitingRule />
            </PopUp>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="Model">Cash Flow Pattern</div>
        <div className="Toggle-btn">
          <ToggleSwitch />
          <div className="edit-btn">
            <button onClick={() => setButtonPopup(true)}>
              <img src={EditButton} alt="edit" />
            </button>
            <PopUp trigger={buttonPop} setTrigger={setButtonPopup}>
              <ExitingRule />
            </PopUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveNewModel;
