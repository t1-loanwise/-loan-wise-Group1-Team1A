import React from 'react'
import UserPreferenceSection from './UserPreferenceSection';
import back from "../assets/back arrow.svg"

const UserPreferenceMain = () => {
  return (
    <div className=" rightContent">
      <div id="back-btn">
        <img src={back} />
        Back
      </div>
      <UserPreferenceSection />
    </div>
  );
};

export default UserPreferenceMain