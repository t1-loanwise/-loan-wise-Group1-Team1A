import React, { useState } from 'react'

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
                <div onClick={() => setIsOpen(!isOpen)} className='arrow'>{isOpen ? '&dsaquo;' :'&rsaquo;'}</div>
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