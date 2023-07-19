import React from "react";
import SuccessReport from "./SuccessReport";
import UnsuccessfulReport from "./UnsuccessfulReport";

function NewPredictionResult({ customer_id, report }) {
  console.log(report);
  const predictModel = "Applicant will default";
  const showReport = () => {
    if (report === predictModel) {
      return <UnsuccessfulReport />;
    } else {
      return <SuccessReport />;
    }
  };
  return (
    <div className="result-analysis">
      <h3>Customer’s ID:{customer_id}</h3>
      {showReport()}
      <button className="new_portfolio_btn2" type="submit">
        Download Report
      </button>
    </div>
  );
}

export default NewPredictionResult;
