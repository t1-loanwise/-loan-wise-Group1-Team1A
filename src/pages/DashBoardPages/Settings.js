import React from "react";
import UserPreference from "./UserPreference";
import NotificationsMain from "../../components/NotificationsMain";
import SettingAndPrivacy from "../../components/SettingAndPrivacy";
import PrivacyForm from "../../components/PrivacyForm";

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
