import React, { useState } from 'react'
import DownChevron from '../assets/down_chevron.svg'
import RightChevron from '../assets/right_chevron.svg'

const SettingAndPrivacy = ({title, subtitle, component}) => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <>
        <div className='setting-accordion'>
            <div className='accordion-header'>
                <div className='accordion-title'>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className='arrow'>
                    {isOpen ? <img src={DownChevron} alt='chevron' className="arrow" height='10' width='10' />  
                    : <img src={RightChevron} alt='chevron' className="arrow" height='10' width='10' /> }</div>
            </div>
            {
               isOpen && 
               <div className='accordion-body'>
                {component}
               </div>
            }
            
        </div>
    </>
  )
}

export default SettingAndPrivacy