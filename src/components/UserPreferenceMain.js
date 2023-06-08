import React from 'react'
import TopBar from './TopBar';
import SideBar from './SideBar';
import UserPreferenceSection from './UserPreferenceSection';
import back from "../assets/back arrow.svg"

const UserPreferenceMain = () => {
  return (
    <div>
        <div id='back-btn'>
          <img src={back}/>
          Back
        </div>
      <UserPreferenceSection/>

    </div>
      
  );
};

export default UserPreferenceMain