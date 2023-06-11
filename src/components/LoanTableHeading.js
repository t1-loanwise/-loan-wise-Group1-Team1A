import React from 'react'
import "../styles/LoanTableHeading.css"
import Button1 from './Button1'

const LoanTableHeading = () => {
  return (
    <div className='loanTableHeadding'>
        <p>Loan Performance Table</p>
        <Button1 style={{borderRadius: "4px"}} text="Download" />
    </div>
  )
}

export default LoanTableHeading