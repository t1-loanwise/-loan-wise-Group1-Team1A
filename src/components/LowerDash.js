import React from 'react'
import LoanTableHeading from './LoanTableHeading'
import LoanTabble from './LoanTabble'
import "../styles/LowerDash.css"

const LowerDash = () => {
  return (
    <div className='lowerDash'>
        <LoanTableHeading />
        <hr />
        <LoanTabble />
    </div>
  )
}

export default LowerDash