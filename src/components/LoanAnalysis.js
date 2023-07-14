import React, { useEffect, useState } from 'react'
import approved from "../assets/tick-approved.svg";
import declined from "../assets/tick-declined.svg";
// import loanWiseData from "../components/loanWiseData.json";
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const LoanAnalysis = () => {
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

  const customerLoanAnalysis = details.filter((data) => data.name === customerName);


  return (
    <div className='loan_container'>
      {customerLoanAnalysis.map((customer) => {
        const loanStatus = customer["Loan status 2"];
        return (
          <div key={customer.customer_id} className='analysis-container'>
            {loanStatus === "Approved" ? (
              <div className="analysis-result">
                <img src={approved} alt="approved" />
                <span>
                  Congratulations, borrower is not likely to default on this
                  loan amount.
                </span>
                <button>Download Report</button>
              </div>
            ) : (
              <div className="analysis-result">
                <img src={declined} alt="declined" />
                <span>
                  Borrower is likely to default on this loan amount, consider a
                  lesser amount
                </span>
                <button>Download Report</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default LoanAnalysis