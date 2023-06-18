import React from "react";
import AnalysisHeader from "./AnalysisHeader";

function Behavioral() {
  const behavioralData = [
    {
      id: 1,
      Icon: "Passed",
      Value: "N 120,000.00",
      Title: "Other loans amount detected",
    },
    {
      id: 2,
      Icon: "Passed",
      Value: "N 80,000.00",
      Title: "Top incoming  Transfer",
    },
    {
      id: 3,
      Icon: "Passed",
      Value: "N 450,000.00",
      Title: "Top outgoing Transfer",
    },
    {
      id: 4,
      Icon: "Passed",
      Value: "No",
      Title: "Gambling or Betting detected ",
    },
    {
      id: 5,
      Icon: "Passed",
      Value: "Low",
      Title: "Gambling Rate",
    },
    {
      id: 6,
      Icon: "Passed",
      Value: "N/A",
      Title: "Loan Repayment",
    },
    {
      id: 7,
      Icon: "Passed",
      Value: "720",
      Title: "Credit Score",
    },
  ];
  return (
    <>
      <AnalysisHeader text="Get a quick insight into your customer spending habits" />
      {behavioralData.map((behavioral) => {
        return (
          <div key={behavioral.id}>
            <h3>{behavioral.Icon}</h3>
            <p>{behavioral.Value}</p>
            <p>{behavioral.Title}</p>
          </div>
        );
      })}
    </>
  );
}

export default Behavioral;
