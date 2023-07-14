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

  const customerLoanDetails = details.filter((data) => data.name === customerName);

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
                  <span>{data["loan_term"]}</span>
                </div>
                <div>
                  <span>Credit Utilization Rate:</span>
                  <span>{data["credit_utilization_rate"]}</span>
                </div>
                <div>
                  <span>No. of Mortgage Account:</span>
                  <span>{data["no_of_mortgageAccount"]}</span>
                </div>
                <div>
                  <span>Income-debt Ratio</span>
                  <span>{data["income_debt_ratio"]}</span>
                </div>
                <div>
                  <span>Open Credit Lines:</span>
                  <span>{data["no_of_openCreditLine"]}</span>
                </div>
              </div>
            );
        })}
    </div>
  )
}

export default LoanDetails