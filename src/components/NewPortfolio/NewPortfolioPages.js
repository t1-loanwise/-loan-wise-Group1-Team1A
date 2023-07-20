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
  const [report, setReport] = useState(null);
  const handleId = (data) => {
    console.log(data);
    setCustomerId(data);
  };
  const handleReport = (data) => {
    console.log(data);
    setReport(data);
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
          <NewEmploymentDetails
            nextStep={nextStep}
            customer_id={customerId}
            report={handleReport}
          />
        );
      case 2:
        return <NewPredictionResult customer_id={customerId} report={report} />;
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
