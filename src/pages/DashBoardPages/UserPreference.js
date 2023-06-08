import React from 'react'
import { Link } from 'react-router-dom'

function UserPreference() {
  return (
    <div className='user-p-box'>
      <Link id='user-p-link' to="/userPreference">
      <h3>User Preference</h3>
      </Link>

      </div>
  )
}

export default UserPreference