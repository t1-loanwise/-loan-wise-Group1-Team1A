import React from "react";
import loanWiseData from "../components/loanWiseData.json";
import { useParams } from "react-router-dom";

const LoanHistory = () => {
    const {customerName} = useParams();
    const customerLoanHistory = loanWiseData.filter((data) => data.name === customerName);

  return (
    <div className="loan_container">
      {customerLoanHistory.map((data) => {
        return (
          <div key={data.name} className="details-minus-image loan-history">
            <div className="history-border">
              <div className="history-date">
                <span>Loan application received</span>
                <span className="history-date-span2">
                  {data["Loan received"]}
                </span>
              </div>
              <p>pending</p>
            </div>
            <div className="history-border">
              <div className="history-date">
                <span>Loan application reviewed</span>
                <span className="history-date-span2">
                  {data["loan reviewed"]}
                </span>
              </div>
              <p>Approved</p>
            </div>
            <div className="history-border">
              <div className="history-date">
                <span>Loan disbursed</span>
                <span className="history-date-span2">
                  {data["loan disbursed"]}
                </span>
              </div>
              <p>{"N" + data["Disbursed"]}</p>
            </div>
            <div className="history-border">
              <div className="history-date">
                <span>First repayment</span>
                <span className="history-date-span2">16th July, 2022</span>
              </div>
              <p>{"N" + data["First repayment"]}</p>
            </div>
            <div className="history-border">
              <div className="history-date">
                <span>Second repayment</span>
                <span className="history-date-span2">16th August, 2022</span>
              </div>
              <p>{"N" + data["Second repayment"]}</p>
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
