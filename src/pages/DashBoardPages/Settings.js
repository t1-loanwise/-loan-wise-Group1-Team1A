import React from "react";
import PredictiveModel from "../../components/PredictiveModel";
import UserPreference from "./UserPreference";

const Settings = () => {
  return (
    <div className="rightContent">
      <PredictiveModel />
      <UserPreference/>
    </div>
  );
};


export default Settings;
