import React from "react";
import SuccessReport from "./SuccessReport";
import UnsuccessfulReport from "./UnsuccessfulReport";

function NewPredictionResult() {
  return (
    <div className="result-analysis">
      <SuccessReport />
    </div>
  );
}

export default NewPredictionResult;
