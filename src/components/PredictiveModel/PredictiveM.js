import { nanoid } from "nanoid";
import React, { useState } from "react";
import NewRule from "./NewRule";
import NewModel from "./NewModel";
import PlusSign from "../../assets/icons/ant-design_plus-outlined.svg";
import PopUp from "./PopUp";
import ToggleSwitch from "../ToggleSwitch";
import EditButton from "../../assets/icons/edit.svg";

import ExitingRule from "./ExitingRule";
import NewRuleModal from "./NewRuleModal";
import ExitingRuleModal from "./ExitingRuleModal";

const PredictiveM = () => {
  const [newRuleButtonPop, setNewRuleButtonpop] = useState(false);
  const [buttonPop, setButtonPopup] = useState(false);
  const [editModel, setEditModel] = useState(null);
  const [editModelPopup, setEditModelPopup] = useState(false);

  //data source
  const initialModel = JSON.parse(localStorage.getItem("newModel")) || [];
  console.log(initialModel);

  const [models, setModels] = useState(initialModel);
  const addNewModel = (model) => {
    console.log(`In predictive content: The new model is ${model}`);

    const modelObject = {
      id: nanoid(),
      name: model,
    };
    const updatedModels = [modelObject, ...models];
    // console.log({ updatedModels });
    setModels(updatedModels);
    localStorage.setItem("newModel", JSON.stringify(updatedModels));
  };
  // handling the edit button
  const handleEditModel = (model) => {
    setEditModel(model);
    setEditModelPopup(true);
  };

  // updating the model
  const handleUpdateModel = (modelId, newName) => {
    const updatedModels = models.map((model) => {
      if (model.id === modelId) {
        return { ...model, name: newName };
      }
      return model;
    });
    setModels(updatedModels);
    localStorage.setItem("newModel", JSON.stringify(updatedModels));
  };

  return (
    <div className="content-container">
      {/* {openModal && (
        <NewRule
          newRule={NewRuleModal}
          handleButtonClick={addNewModel}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )} */}
      <PopUp trigger={newRuleButtonPop} setTrigger={setNewRuleButtonpop}>
        <NewRule newRule={NewRule} handleClick={addNewModel} />
      </PopUp>

      {models.length > 0 ? (
        <div>
          {models.map((model) => (
            <div className="content" key={model.id}>
              <span className="Model">{model.name}</span>
              <div className="Toggle-btn">
                <ToggleSwitch />
                <div className="edit-btn">
                  <button onClick={() => handleEditModel(model)}>
                    <img src={EditButton} alt="edit" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Enter a new model</p>
      )}
      {/* {openModal && (
        <ExitingRule
          model={editModel}
          onUpdate={handleUpdateModel}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )} */}
      {editModelPopup && (
        <PopUp trigger={editModelPopup} setTrigger={setEditModelPopup}>
          <ExitingRule model={editModel} onUpdate={handleUpdateModel} />
        </PopUp>
      )}
      <div className="new-rule">
        <div className="edit-btn">
          <button
            className="new-rule-btn"
            onClick={() => {
              setNewRuleButtonpop(true);
            }}
          >
            <img src={PlusSign} alt="plus" />
            Set new rule
          </button>
          {/* {openModal && (
            <NewRule openModal={openModal} setOpenModal={setOpenModal} />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default PredictiveM;
