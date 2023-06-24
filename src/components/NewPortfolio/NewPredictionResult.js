import React from "react";
import SuccessReport from "./SuccessReport";
import UnsuccessfulReport from "./UnsuccessfulReport";

function NewPredictionResult() {
  let creditScore = 70;
  const showPrediction = () => {
    if (creditScore > 50) {
      <SuccessReport />;
    }
    <UnsuccessfulReport />;
  };
  return <>{showPrediction()}</>;
}

export default NewPredictionResult;
