import React from 'react'
import "../App.css";
import ToggleSwitch from './ToggleSwitch';
const UserPreference = () => {
  return (
    <div className='preference_container'>
      <div className='appearance_settings'>
       <h2>User Preference</h2>
      </div>

      <div className='frame_one'>
       <div className='heading-one'>
        <h4>Transparent Sidebar</h4>
       </div>
       <div className='para_toggle'>
        <p>Make the desktop Sidebar transparent</p>
        {/* < switch toggler> */}
       </div>
      </div>

      <div className='frame_two'>
      <div id='frame_two_text'>
        <h4>Notification Settings</h4>
        <p>We may still send you important notifications about outside of your notifications settings.</p>
      </div>
      <div className='frame_three'>
      <div id='frame_three_notif'>
        <div className='frame_three_contents'>
         <div className='headings'>
         <h5>Tags</h5>
         <p>These are notifications for when <br/> someone tags you in a comment or <br/>  message</p>
         
         </div>    
         <div className='toggle-button'>
         <p>Push</p>
         <p>Email</p>
         <p>SMS</p>
         </div>
        </div>
        <div className='frame_three_contents'>
        <div className='headings'>
         <h5>Reminders</h5>
         <p>These are notifications to remind you of updates you might have misssed</p>
         <div className='toggle-button'>
         <p>Push</p>
         <p>Email</p>
         <p>SMS</p>
         </div>
         </div>
        </div>
        <div className='frame_three_contents'>
        <div className='headings'>
         <h5>Comments</h5>
         <p>These are notifications to remind you of updates you might have misssed.</p>
         <div className='toggle-button'>
         <p>Push</p>
         <p>Email</p>
         <p>SMS</p>
         </div>
         </div>
        </div>
      </div>
      <div id='frame_three_input'>
        <div id='frame_input_heading'>
         <h4>We've just launched, Keep in touch! </h4>
         <p>Check out the all new dashboard view. Pages and now load faster</p>
        </div>
     <div id='frame_input'>
      <h5>Subscribe to updates</h5>
      <input type='email'/>
     </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default UserPreference