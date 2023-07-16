import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import NewBorrowerDetails from "./NewBorrowerDetails";
import NewEmploymentDetails from "./NewEmploymentDetails";
import NewPredictionResult from "./NewPredictionResult";
import { useEffect } from "react";

function NewPortfolioPages() {
  const [page, setPage] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const totalPages = 3; // Total number of pages
  const [customerId, setCustomerId] = useState(null);
  const handleId = (data) => {
    console.log(data);
    setCustomerId(data);
  };
  useEffect(() => {
    console.log("id:", customerId);
  }, [customerId]);

  const nextStep = () => {
    if (page !== totalPages - 1) {
      setPage(page + 1);
      setCurrentStep(currentStep + 1);
    }
  };

  const ShowNextPage = () => {
    switch (page) {
      case 0:
        return (
          <NewBorrowerDetails nextStep={nextStep} customer_id={handleId} />
        );
      case 1:
        return (
          <NewEmploymentDetails nextStep={nextStep} customer_id={customerId} />
        );
      case 2:
        return <NewPredictionResult customer_id={customerId} />;
      default:
        break;
    }
  };

  return (
    <div className="rightContent portfolio-form-container">
      <ProgressBar currentPage={page} activeStep={currentStep} />
      {ShowNextPage()}
    </div>
  );
}

export default NewPortfolioPages;
