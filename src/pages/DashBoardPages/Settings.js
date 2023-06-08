import React from "react";
import PredictiveModel from "../../components/PredictiveModel";
import UserPreference from "./UserPreference";
import NotificationsMain from "../../components/NotificationsMain";

const Settings = () => {
  return (
    <div className="rightContent">
      <PredictiveModel />
      <UserPreference/>
      <NotificationsMain />
    </div>
  );
};


export default Settings;
