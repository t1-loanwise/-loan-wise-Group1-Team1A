import React from "react";
import PredictiveModel from "../../components/PredictiveModel";
import SettingAndPrivacy from "../../components/SettingAndPrivacy";
import PrivacyForm from "../../components/PrivacyForm";

const Settings = () => {
  return (
    <div>
      <PredictiveModel />
      <SettingAndPrivacy title='Security & Privacy' subtitle='Protect your account with maximum security' component={<PrivacyForm />} />
    </div>
  );
};

export default Settings;
