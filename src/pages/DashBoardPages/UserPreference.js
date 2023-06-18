import React from 'react'
import { Link } from 'react-router-dom'

function UserPreference() {
  return (
    <div className="user-p-box">
      <Link className='title' to="/userPreference">
        <h3 id="user-p-link">User Preferences</h3>
      </Link>
    </div>
  );
}

export default UserPreference