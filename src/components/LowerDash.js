import React from 'react'
import LoanTableHeading from './LoanTableHeading'
import LoanTabble from './LoanTabble'
import "../styles/LowerDash.css"
import LoanHiistory from './LoanHiistory'
import LoanTablePaginatiion from './LoanTablePaginatiion'

const LowerDash = () => {
  return (
    <div className='lowerDash'>
        <LoanTableHeading />
        <hr />
        <LoanTabble />
        <div className='lowerlastdash'>
          <LoanHiistory />
          <LoanTablePaginatiion />
        </div>
    </div>
  )
}

export default LowerDash