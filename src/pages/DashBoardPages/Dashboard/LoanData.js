import React, { useEffect, useState } from "react";
import DashCardGraph from "../../../components/DashCardGraph";
import axios from "axios";

const LoanData = () => {
  const [loanData, setLoanData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://loanwise.onrender.com/api/loan-table"
        );
        setLoanData(response.data);
      } catch (error) {
        console.error("Error fetching loan data:", error);
      }
    };

    fetchData();
  }, []);

  // Wait until loanData is fetched before rendering DashCardGraph
  if (loanData.length === 0) {
    return <div>Loading...</div>;
  }

  const loanDataLength = loanData.length;


  return (
    <div>
      {/* <DashCardGraph loanDataLength={loanDataLength} /> */}
    </div>
  );
};

export default LoanData;
