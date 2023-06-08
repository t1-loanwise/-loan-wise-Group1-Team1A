import React from 'react'
import TopBar from './TopBar';
import SideBar from './SideBar';
import UserPreferenceSection from './UserPreferenceSection';


const UserPreferenceMain = () => {
  return (
    <div>
      <TopBar/>
      <SideBar/>
      <div>
      <UserPreferenceSection/>
      </div>

    </div>
      
  );
};

export default UserPreferenceMain