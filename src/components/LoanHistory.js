import React, { useEffect, useState } from "react";
// import loanWiseData from "../components/loanWiseData.json";
import { useParams } from "react-router-dom";
import axios from "axios";

const LoanHistory = () => {
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

     const customerLoanHistory = details.filter(
       (data) => data.name === customerName
     );


  return (
    <div className="loan_container">
      {customerLoanHistory.map((data) => {
        return (
          <div key={data.name} className="details-minus-image loan-history">
            <div className="history-border">
              <div className="history-date">
                <span>Loan application received</span>
                <span className="history-date-span2">
                  {data["Loan_received"]}
                </span>
              </div>
              <p>pending</p>
            </div>
            <div className="history-border">
              <div className="history-date">
                <span>Loan application reviewed</span>
                <span className="history-date-span2">
                  {data["loan_reviewed"]}
                </span>
              </div>
              <p>Approved</p>
            </div>
            <div className="history-border">
              <div className="history-date">
                <span>Loan disbursed</span>
                <span className="history-date-span2">
                  {data["loan_disbursed"]}
                </span>
              </div>
              <p>{"N" + data["Disbursed"]}</p>
            </div>
            <div className="history-border">
              <div className="history-date">
                <span>First repayment</span>
                <span className="history-date-span2">16th July, 2022</span>
              </div>
              <p>{"N" + data["first repayment"]}</p>
            </div>
            <div className="history-border">
              <div className="history-date">
                <span>Second repayment</span>
                <span className="history-date-span2">16th August, 2022</span>
              </div>
              <p>{"N" + data["second_repayment"]}</p>
            </div>
            <div className="history-border">
              <div className="history-date">
                <span>First default</span>
                <span className="history-date-span2">16th July, 2022</span>
              </div>
              <p>{data["Default"]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LoanHistory;
