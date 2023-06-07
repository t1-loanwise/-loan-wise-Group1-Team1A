import React from 'react';
import Check from "../assets/tick-circle.svg"
import "../styles/Home.css";

const Checklist = ({text}) => {
  return (
    <div>
      <div id='checklist'>
      <img src={Check}/>
      <p>{text}</p>
      </div>
      
      </div>
  )
}

export default Checklist