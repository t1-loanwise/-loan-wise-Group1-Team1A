import React from "react";
import SuccessReport from "./SuccessReport";
import UnsuccessfulReport from "./UnsuccessfulReport";

function NewPredictionResult({ customer_id }) {
  return (
    <div className="result-analysis">
      <h3>Customer’s ID:{customer_id}</h3>
      <SuccessReport />
      <button className="new_portfolio_btn" type="submit">
        Download Report
      </button>
    </div>
  );
}

export default NewPredictionResult;
