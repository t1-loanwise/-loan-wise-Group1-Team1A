import React from 'react'
import loanWiseData from "./loanWiseData.json"
import { useParams } from 'react-router-dom';

const LoanDetails = () => {
  const {customerName }= useParams();

  const customerLoanDetails = loanWiseData.filter((data) => data.name === customerName);
  return (
    <div className="loan_container">
        {customerLoanDetails.map((data)=> {
            return (
              <div key={data.name} className="details-minus-image">
                <div>
                  <span>Requested Loan Amount:</span>
                  <span>{"N" + data.Requested}</span>
                </div>
                <div>
                  <span>Loan Term:</span>
                  <span>{data["Loan Term"]}</span>
                </div>
                <div>
                  <span>Credit Utilization Rate:</span>
                  <span>{data["Credit Utilization Rate"]}</span>
                </div>
                <div>
                  <span>No. of Mortgage Account:</span>
                  <span>{data["No of Mortgage Account"]}</span>
                </div>
                <div>
                  <span>Income-debt Ratio</span>
                  <span>{data["Income-Debt Ratio"]}</span>
                </div>
                <div>
                  <span>Open Credit Lines:</span>
                  <span>{data["No of Open Credit Lines"]}</span>
                </div>
              </div>
            );
        })}
    </div>
  )
}

export default LoanDetails