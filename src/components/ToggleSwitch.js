import React from 'react'

const ToggleSwitch = ({ label }) => {
  return (
    <div>
        <div className="tog">
        <div className="toggle-switch">
            <input type="checkbox" className="checkbox"
            name={label} id={label} />
            <label className="label" htmlFor={label}>
                <span className="inner"/>
                <span className="switch" />
            </label>
        </div>
    
    </div>
    </div>
  )
}

export default ToggleSwitch