import React from "react";
import SuccessReport from "./SuccessReport";
import UnsuccessfulReport from "./UnsuccessfulReport";

function NewPredictionResult({ customer_id, report }) {
  const showReport = () => {
    if ((report = "Applicant will default")) {
      <UnsuccessfulReport />;
    } else {
      <SuccessReport />;
    }
  };
  return (
    <div className="result-analysis">
      <h3>Customer’s ID:{customer_id}</h3>
      {showReport}
      <button className="new_portfolio_btn" type="submit">
        Download Report
      </button>
    </div>
  );
}

export default NewPredictionResult;
