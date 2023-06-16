import React, { useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import EditButton from "../assets/icons/edit.svg";
import PopUp from "../components/PopUp";
import ExitingRule from "./ExitingRule";

const NewModel = (props) => {
  const [buttonPop, setButtonPopup] = useState(false);

  const renderedModels = props.models.map((model, index) => {
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
  });

  return <div>{renderedModels}</div>;
};

export default NewModel;
