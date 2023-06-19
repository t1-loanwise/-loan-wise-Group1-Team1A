import React from "react";
import loanWiseData from "../components/loanWiseData.json";
import { useParams } from "react-router-dom";

const LoanHistory = () => {
    const {customerName} = useParams();

    const customerLoanHistory = loanWiseData.filter((data) => data.name === customerName);

  return (
    <>
      {customerLoanHistory.map((data) => {
        return (
          <div key={data.name}>
            <div>
              <div>
                <span>Loan application received</span>
                <span>{data["Loan received"]}</span>
              </div>
              <div>
                <span>pending</span>
              </div>
            </div>
            <div>
              <div>
                <span>Loan application reviewed</span>
                <span>{data["loan reviewed"]}</span>
              </div>
              <div>
                <span>Approved</span>
              </div>
            </div>
            <div>
              <div>
                <span>Loan disbursed</span>
                <span>{data["loan disbursed"]}</span>
              </div>
              <div>
                <span>{data["Disbursed"]}</span>
              </div>
            </div>
            <div>
              <div>
                <span>First repayment</span>
                <span>16th July, 2022</span>
              </div>
              <div>
                <span>{data["First repayment"]}</span>
              </div>
            </div>
            <div>
              <div>
                <span>Second repayment</span>
                <span>16th August, 2022</span>
              </div>
              <div>
                <span>{data["Second repayment"]}</span>
              </div>
            </div>
            <div>
              <div>
                <span>First default</span>
                <span>16th July, 2022</span>
              </div>
              <div>
                <span>{data["Default"]}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LoanHistory;
