import React from 'react'
import "../styles/Home.css";
const HomeHeader =({header, text}) => {
  return (
    <div className='all_text'>
   <h3 className='home-header'>{header}</h3>
   <p className='home-text'>{text}</p>
    </div>
  )
}

export default HomeHeader