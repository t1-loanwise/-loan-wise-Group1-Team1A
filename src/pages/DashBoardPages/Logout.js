import React from 'react'
import emoji from "../../assets/emoji.svg"
import "../../styles/Logout.css"
import { Link } from 'react-router-dom'



const Logout = () => {


  return <div className="rightContent">
    <div className='emoji-div'>
      <img src={emoji} alt='oops' />
        <h1>Oops! are you sure about this?</h1>
        
        <button className='logout-btn' ><Link to='/Login'>Log Out </Link></button>
    </div>
  </div>;
}

export default Logout