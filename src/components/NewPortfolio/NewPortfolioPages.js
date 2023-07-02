import React, { useState } from "react";
import NewPersonalInfo from "./NewBorrowerDetails";
import ProgressBar from "./ProgressBar";
import NewBorrowerDetails from "./NewBorrowerDetails";
import NewEmploymentDetails from "./NewEmploymentDetails";
import NewPredictionResult from "./NewPredictionResult";

function NewPortfolioPages() {
  const [page, setPage] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const totalPages = 3; // Total number of pages

  function handleSubmit() {
    if (page !== 2) {
      setPage(page + 1);
      setCurrentStep(currentStep + 1);
    }
  }

  const ShowNextPage = () => {
    switch (page) {
      case 0:
        return <NewBorrowerDetails />;
      case 1:
        return <NewEmploymentDetails />;
      case 2:
        return <NewPredictionResult />;
      default:
        break;
    }
  };

  return (
    <div className="rightContent portfolio-form-container">
      <ProgressBar currentPage={page} activeStep={currentStep} />
      <div className="input-form">
        {ShowNextPage()}
        <button className="new_portfolio_btn" onClick={handleSubmit}>
          {page === 0
            ? "Proceed"
            : page === totalPages - 1
            ? "Download Report"
            : "Analyze"}
        </button>
      </div>
    </div>
  );
}

export default NewPortfolioPages;
