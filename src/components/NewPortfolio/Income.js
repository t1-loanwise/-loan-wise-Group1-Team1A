import React from "react";
import AnalysisHeader from "./AnalysisHeader";

function Income() {
  const incomeData = [
    {
      id: 1,
      Icon: "Passed",
      Value: "Yes",
      Title: "Salary Earner",
    },
    {
      id: 2,
      Icon: "Passed",
      Value: "N 64,000.00",
      Title: "Average Salary",
    },
    {
      id: 3,
      Icon: "Passed",
      Value: "High",
      Title: "Salary Frequency",
    },
    {
      id: 4,
      Icon: "Passed",
      Value: "N 20,000.00",
      Title: "Average other income ",
    },
    {
      id: 5,
      Icon: "Passed",
      Value: "28th",
      Title: "Expected Salary day",
    },
    {
      id: 6,
      Icon: "Passed",
      Value: "May 31",
      Title: "Last Salary Date",
    },
  ];
  return (
    <>
      <AnalysisHeader text="See the details about your customer source of income or otherwise." />
      <div>
        <p>
          Certainty in intervals on salary percentage on the amount identified
          as salary.
        </p>
        <p>Percentage Certainty: 84.00% </p>
      </div>
      {incomeData.map((income) => {
        return (
          <div key={income.id}>
            <h3>{income.Icon}</h3>
            <p>{income.Value}</p>
            <p>{income.Title}</p>
          </div>
        );
      })}
    </>
  );
}

export default Income;
