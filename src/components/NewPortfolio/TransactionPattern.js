import React from "react";
import AnalysisHeader from "../AnalysisHeader";

function TransactionPattern() {
  const transactionPatternData = [
    {
      id: 1,
      Icon: "Passed",
      Value: "130",
      Title: "Number of Transactions less than N5,000",
    },
    {
      id: 2,
      Icon: "Passed",
      Value: "80",
      Title: "Transactions greater than N400,000",
    },
    {
      id: 3,
      Icon: "Passed",
      Value: "100",
      Title: "Transaction btwn N100,000 - N500,000",
    },
    {
      id: 4,
      Icon: "Passed",
      Value: "N250,000 - N 305,000",
      Title: "Most frequent balance range ",
    },
    {
      id: 5,
      Icon: "Passed",
      Value: "N650,000.00",
      Title: "Highest amount of credit",
    },
    {
      id: 6,
      Icon: "Passed",
      Value: "N420,000.00",
      Title: "Highest amount of debits",
    },
  ];
  return (
    <>
      <AnalysisHeader text="Get a quick insight into your customer spending habits" />
      {transactionPatternData.map((transactionPattern) => {
        return (
          <div key={transactionPattern.id}>
            <h3>{transactionPattern.Icon}</h3>
            <p>{transactionPattern.Value}</p>
            <p>{transactionPattern.Title}</p>
          </div>
        );
      })}
    </>
  );
}

export default TransactionPattern;
