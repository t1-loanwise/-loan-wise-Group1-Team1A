import React from 'react'
// Styled component named StyledButton

const TextHeader = (props) => {
  return (
        <div className='text-header'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {
              props.linkLabel && <a href="#faqs">{props.linkLabel}</a>
            } 
        </div>
  )
}

export default TextHeader