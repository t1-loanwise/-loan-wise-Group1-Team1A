import React from 'react'
import { useNavigate } from 'react-router';
import UserPreferenceSection from './UserPreferenceSection';
import back from "../assets/back arrow.svg";

const UserPreferenceMain = () => {
 const navigate = useNavigate();

 const handleBackClick = () => {
  navigate('/settings')
 }
  return (
    <div className=" rightContent">
      <UserPreferenceSection />
    </div>
  );
};

export default UserPreferenceMain