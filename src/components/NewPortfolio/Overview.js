import React from "react";
import AnalysisHeader from "./AnalysisHeader";

function Overview() {
  const overviewData = [
    {
      id: 1,
      Status: "Passed",
      Comment:
        "Customer’s income and expenses align favorably with the rule of the institution.",
      AnalysisType: "Cash Flow Analysis",
    },
    {
      id: 2,
      Status: "Passed",
      Comment:
        "Customer’s income analysis confirms their ability to meet loan obligation.",
      AnalysisType: "Income Analysis",
    },
    {
      id: 3,
      Status: "Passed",
      Comment:
        "Customer’s financial record demonstrates financial responsibility.",
      AnalysisType: "Spend Analysis",
    },
    {
      id: 4,
      Status: "Passed",
      Comment:
        "Customer’s financial conduct demonstrates responsible financial habits.",
      AnalysisType: "Behavioral Analysis",
    },
    {
      id: 5,
      Status: "Passed",
      Comment:
        "Customer’s transaction history indicates consistent and reliable financial behavior.",
      AnalysisType: "Transactional Pattern",
    },
  ];
  return (
    <>
      <AnalysisHeader text="Result of Loan LN12341 Bank Statement Analysis " />
      <div>
        <h3>Result:Passed</h3>
        <p>
          Customer has successfully passed all the required analyses, indicating
          a low risk of default and is eligible for loan disbursement.
        </p>
        <button>View Affordability</button>
      </div>
      {overviewData.map((overview) => {
        return (
          <div key={overview.id}>
            <h3>{overview.Status}</h3>
            <p>{overview.Comment}</p>
            <p>{overview.AnalysisType}</p>
          </div>
        );
      })}
    </>
  );
}

export default Overview;
