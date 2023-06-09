import React from "react";
import PredictiveModel from "../../components/PredictiveModel";
import SettingAndPrivacy from "../../components/SettingAndPrivacy";
import PrivacyForm from "../../components/PrivacyForm";
import NotificationsMain from "../../components/NotificationsMain";

const Settings = () => {
  return (
    <div className="rightContent">
      <PredictiveModel />
      <SettingAndPrivacy title='Security & Privacy' subtitle='Protect your account with maximum security' component={<PrivacyForm />} />
      <NotificationsMain />
    </div>
  );
};


export default Settings;
