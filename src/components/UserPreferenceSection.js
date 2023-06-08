import React from 'react'
import "../App.css";
import ToggleSwitch from './ToggleSwitch';
const UserPreferenceSection = () => {
  return (
    <div className='preference_container'>
      <div className='appearance_settings'>
       <h2>User Preference</h2>
      </div>

      <div className='frame_one'>
       <div id='heading-one'>
        <h4>Transparent Sidebar</h4>
       </div>
       <div className='para_toggle'>
        <p>Make the desktop Sidebar transparent</p>
        <ToggleSwitch/>
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
                  <div className='toggle-container'>
                    <div className='toggle-button'>
              <div className='toggle'>
                <ToggleSwitch className="switch"/>
               <p>Push</p>
             </div>
              <div className='toggle'>
               <ToggleSwitch/>
                <p>Email</p>
              </div>
              <div className='toggle'>
               <ToggleSwitch/>
              <p>SMS</p>
             </div>
                  </div> 
                  </div>
                    
                   <div className='headings'>
                    <h4>Tags</h4>
                    <p>These are notifications for when <br/> someone tags you in a comment or <br/> message</p>
                   </div>
                </div>
                
                <div className='frame_three_contents'>
                <div className='toggle-container'>
                    <div className='toggle-button'>
              <div className='toggle'>
                <ToggleSwitch className="switch"/>
               <p>Push</p>
             </div>
              <div className='toggle'>
               <ToggleSwitch/>
                <p>Email</p>
              </div>
              <div className='toggle'>
               <ToggleSwitch/>
              <p>SMS</p>
             </div>
                  </div> 
                  </div>   
                   <div className='headings'>
                   <h4>Reminder</h4>
                     <p>These are notifications to remind <br/> you of updates you might have <br/> misssed</p>
                   </div>
                </div>

                <div className='frame_three_contents'>
                <div className='toggle-container'>
                    <div className='toggle-button'>
              <div className='toggle'>
                <ToggleSwitch className="switch"/>
               <p>Push</p>
             </div>
              <div className='toggle'>
               <ToggleSwitch/>
                <p>Email</p>
              </div>
              <div className='toggle'>
               <ToggleSwitch/>
              <p>SMS</p>
             </div>
                  </div> 
                  </div>    
                <div className='headings'>
                  <h4>Comments</h4>
                   <p>These are notifications to remind <br/> you of updates you might have <br/> misssed</p>
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
      
  )
}

export default UserPreferenceSection;