import React from 'react'

const OutlineButton = (props) => {
  return (
    <button className='outline-button'>{props.label} {props.icon}</button>
  )
}

export default OutlineButton