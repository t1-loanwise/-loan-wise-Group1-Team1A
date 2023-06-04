import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import EditButton from "../assets/icons/edit.svg";
import "../styles/AccordianContent.css";
import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";
import PopUp from "../components/PopUp";
import ExitingRule from "./ExitingRule";
import { faSleigh } from "@fortawesome/free-solid-svg-icons";

const PredictiveContent = () => {
  const [buttonPop, setButtonPopup] = useState(false);
  return (
    <div className="content-container">
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
            <button type="button">
              <img src={EditButton} alt="edit" />
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="Model">Spending Pattern</div>
        <div className="Toggle-btn">
          <ToggleSwitch />
          <div className="edit-btn">
            <button type="button">
              <img src={EditButton} alt="edit" />
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="Model">Cash Flow Pattern</div>
        <div className="Toggle-btn">
          <ToggleSwitch />
          <div className="edit-btn">
            <button type="button">
              <img src={EditButton} alt="edit" />
            </button>
          </div>
        </div>
      </div>
      <div className="new-rule">
        <button className="new-rule-btn" type="submit">
          <img src={PlusSign} alt="plus" />
          <p>Set new rule</p>
        </button>
      </div>
    </div>
  );
};

export default PredictiveContent;
