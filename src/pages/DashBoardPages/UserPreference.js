import React from 'react'
import { Link } from 'react-router-dom'

function UserPreference() {
  return (
    <div className='user-p-box'>
      <Link class='title' to="../../components/UserPreferenceMain"> 
      <h3 id='user-p-link' >User Preference</h3>
      </Link>

      </div>
  )
}

export default UserPreference