import React, {useState} from 'react'
import plus from '../assets/icons/plus.png'

const Accordion = (props) => {  
    const [isOpen, setIsOpen] = useState(false)  
  return (
    <div>
        <div className='faq-accordion'>
        <div>{props.title} {props.isOpen}</div>
        <img src={plus} height='20' width='20' alt='plus' onClick={() => setIsOpen(!isOpen)}/></div>
        {isOpen && <div className='faq-answer'>{props.content}</div>}
    </div>
  )
}

export default Accordion