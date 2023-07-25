import React from "react";
import PredictiveModel from "../../../components/PredictiveModel/PredictiveModel";
import UserPreference from "../../../components/UserPreference";
import NotificationsMain from "../../../components/NotificationsMain";
import SettingAndPrivacy from "../../../components/SettingAndPrivacy";
import PrivacyForm from "../../../components/PrivacyForm";

const Settings = () => {
  return (
    <div className="rightContent">
      <NotificationsMain />
      <SettingAndPrivacy
        title="Security & Privacy"
        subtitle="Protect your account with maximum security"
        component={<PrivacyForm />}
      />

      <UserPreference />
    </div>
  );
};

export default Settings;
