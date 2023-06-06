import React from 'react'
import UpperDash from './UpperDash';
import LowerDash from './LowerDash';
import "../styles/subbDashboard.css"


const SubbDashboard = () => {
  return (
    <div className='subbdash'>
        <UpperDash />
        <LowerDash />
    </div>
  )
}

export default SubbDashboard;