import React from "react";
import React, { useEffect, useState } from "react";
import ToggleSwitch from "../ToggleSwitch";
import EditButton from "../../assets/icons/edit.svg";
// import ExitingRule from "./ExitingRule";
// import PopUp from "./PopUp";
import ExitingRuleModal from "./ExitingRuleModal";

const NewModel2 = (props) => {
  // const [buttonPop, setButtonPopup] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const renderedModels = props.models.map((model, index) => {
    return (
      <div className="content" key={model.id}>
        <div className="Model">{model.name}</div>
        <div className="Toggle-btn">
          <ToggleSwitch />
          <div className="edit-btn">
            <button onClick={() => setOpenModal(true)}>
              <img src={EditButton} alt="edit" />
            </button>
            {openModal && (
              <ExitingRuleModal
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
            {/* <PopUp trigger={buttonPop} setTrigger={setButtonPopup}>
              <ExitingRuleModal model={model} />
            </PopUp> */}
          </div>
        </div>
      </div>
    );
  });

  return <div>{renderedModels}</div>;
};
export default NewModel2;
