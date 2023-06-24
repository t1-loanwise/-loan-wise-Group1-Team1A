import React from "react";
import SuccessReport from "./SuccessReport";
import UnsuccessfulReport from "./UnsuccessfulReport";

function NewPredictionResult() {
<<<<<<< HEAD
  let creditScore = 70;
  const showPrediction = () => {
    if (creditScore > 50) {
      <SuccessReport />;
    }
    <UnsuccessfulReport />;
  };
  return <>{showPrediction()}</>;
=======
  return <div className="result-analysis">NewPredictionResult</div>;
>>>>>>> b28653029af4626943f0625170cb8bccdcf0cf89
}

export default NewPredictionResult;
