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
      <div className='back-btn-container'>
         <button id="back-btn" onClick={handleBackClick}>
        <img src={back} alt='back-button'/>
        <p>Back</p>
      </button>
      </div>
      <UserPreferenceSection />
    </div>
  );
};

export default UserPreferenceMain