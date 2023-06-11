import React from "react";
import AnalysisHeader from "./AnalysisHeader";

function Spend() {
  const spendData = [
    {
      id: 1,
      Icon: "Passed",
      Value: "N 450,000.00",
      Title: "Total Expenses",
    },
    {
      id: 2,
      Icon: "Passed",
      Value: "N 50,000.00",
      Title: "Amount spent on Transfer",
    },
    {
      id: 3,
      Icon: "Passed",
      Value: "N 450,000.00",
      Title: "ATM withdrawals",
    },
    {
      id: 4,
      Icon: "Passed",
      Value: "N 120,000.00",
      Title: "POS Expenses ",
    },
    {
      id: 5,
      Icon: "Passed",
      Value: "N 20,000.00",
      Title: "Airtime and Data",
    },
    {
      id: 6,
      Icon: "Passed",
      Value: "N 320,000.00",
      Title: "Miscellaneous",
    },
  ];
  return (
    <>
      <AnalysisHeader text="Get a quick insight into what your customer is spending on." />
      {spendData.map((spend) => {
        return (
          <div key={spend.id}>
            <h3>{spend.Icon}</h3>
            <p>{spend.Value}</p>
            <p>{spend.Title}</p>
          </div>
        );
      })}
    </>
  );
}

export default Spend;
