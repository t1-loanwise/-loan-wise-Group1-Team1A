import React, { useState } from 'react'
import DownChevron from '../assets/down_chevron.svg'
import RightChevron from '../assets/right_chevron.svg'

const SettingAndPrivacy = ({title, subtitle, component}) => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div className="predictive-model-container">
        <div className='accordion'>
            <div className='accordion-item'>
                <div className='accordion-title' onClick={() => setIsOpen(!isOpen)} >
                    <div className="accordion-text">
                        <div className="title">{title}</div>
                        <div className="body">{subtitle}</div>
                    </div>    
                    
                    <div >
                    {isOpen ? <img src={DownChevron} alt='chevron' className="arrow" width="18px"  />  
                    : <img src={RightChevron} alt='chevron' className="arrow" width="12px" /> }</div>
                </div>
                

            {
               isOpen && 
               <div className='accordion-content'>
                {component}
               </div>
            }
            </div>
            
        </div>
    </div>
  )
}

export default SettingAndPrivacy