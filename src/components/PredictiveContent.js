import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import EditButton from "../assets/icons/edit.svg";
import "../styles/AccordianContent.css";
import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";
import PopUp from "../components/PopUp";
import ExitingRule from "./ExitingRule";

import NewRule from "./NewRule";

const models = [
  {
    id: "1",
    name: "Bank statement Name March",
    isActive: false,
  },
  {
    id: "2",
    name: "Behavioral Pattern",
    isActive: false,
  },
  {
    id: "3",
    name: "Spending Pattern",
    isActive: false,
  },
  {
    id: "4",
    name: "Cash Flow Pattern",
    isActive: false,
  },
];

const PredictiveContent = () => {
  const [buttonPop, setButtonPopup] = useState(false);
  const [newRuleButtonPop, setNewRuleButtonpop] = useState(false);

  return (
    <div className="content-container">
      {models.map((model) => {
        return (
          <div className="content" key={model.id}>
            <div className="Model">{model.name}</div>
            <div className="Toggle-btn">
              <ToggleSwitch />
              <div className="edit-btn">
                <button onClick={() => setButtonPopup(true)}>
                  <img src={EditButton} alt="edit" />
                </button>
                <PopUp trigger={buttonPop} setTrigger={setButtonPopup}>
                  <ExitingRule model={model} />
                </PopUp>
              </div>
            </div>
          </div>
        );
      })}

      <div className="new-rule">
        <div className="edit-btn">
          <button
            className="new-rule-btn"
            onClick={() => setNewRuleButtonpop(true)}
          >
            <img src={PlusSign} alt="plus" />
            Set new rule
          </button>
          <PopUp trigger={newRuleButtonPop} setTrigger={setNewRuleButtonpop}>
            <NewRule />
          </PopUp>
        </div>
      </div>
    </div>
  );
};

export default PredictiveContent;
