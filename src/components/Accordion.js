import React, {useState}  from 'react'
import plus from '../assets/icons/plus.png'

const Accordion = (props) => {
    
    const [isAccordionActive, setIsAccordionActive] = useState(false)
  return (
    <div>
        <div className='faq-accordion'>{props.title} 
        <img src={plus} height='20' width='20' alt='plus' onClick={(event) => setIsAccordionActive(!isAccordionActive)}/></div>
        {isAccordionActive && <div className='faq-answer'>{props.content}</div>}
    </div>
  )
}

export default Accordion