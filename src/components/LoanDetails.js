import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

const LoanDetails = () => {
  const { customerName } = useParams();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loanWiseData = async () => {
      try {
        const response = await axios.get(
          `https://loanwise.onrender.com/api/loan-table`
        );
        setDetails(response.data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };

    loanWiseData();
  }, []);

  const customerLoanDetails = details.filter((data) => data.fullName === customerName);

  return (
    <div className="loan_container">
        {customerLoanDetails.map((data)=> {
            return (
              <div key={data.name} className="details-minus-image">
                <div className="details-border">
                  <span>Requested Loan Amount:</span>
                  <span>{"N" + data.EmploymentData.requestedAmount}</span>
                </div>
                <div className="details-border">
                  <span>Loan Term:</span>
                  <span>{data.EmploymentData["Loan_Term"]}</span>
                </div>
                <div className="details-border">
                  <span>Credit Utilization Rate:</span>
                  <span>{data.EmploymentData["Credit_Utilization_Rate"]}</span>
                </div>
                <div className="details-border">
                  <span>No. of Mortgage Account:</span>
                  <span>{data.EmploymentData["No_of_Mortgage_Account"]}</span>
                </div>
                <div className="details-border">
                  <span>Income-debt Ratio</span>
                  <span>{data.EmploymentData["Income_Debt_Ratio"]}</span>
                </div>
                <div className="details-border">
                  <span>Open Credit Lines:</span>
                  <span>{data.EmploymentData["No_of_Open_Credit_Lines"]}</span>
                </div>
              </div>
            );
        })}
    </div>
  )
}

export default LoanDetails