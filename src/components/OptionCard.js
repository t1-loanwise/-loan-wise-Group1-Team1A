import React from 'react'
import OutlineButton from './OutlineButton'
import {BsArrowRight} from 'react-icons/bs';

const OptionCard = (props) => {
  return (
    <div className='pricing-option-card'>
      <img src={props.image} alt='avatar'/>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <div className='button-section'>
        <OutlineButton label="Learn more" icon=<BsArrowRight /> />
      </div>
    </div>
  )
}

export default OptionCard