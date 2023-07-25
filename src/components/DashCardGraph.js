import React, { useEffect, useState } from "react";
import Cash from "../assets/moneys.svg";
import Arrows from "../assets/arrowsUpDown.svg";
import CardIcon from "../assets/card-receive.svg";
import "../styles/cardGraph.css";
import Barchart from "./BarChart";
import Linechart from "./Linechart";
import axios from "axios";

const DashCardGraph = () => {
const [loanData, setLoanData] = useState([]);
const [totalAmountofLoans, setTotalAmountofLoans] = useState(0);
const [totalRecoveredLoans, setTotalRecoveredLoans] = useState(0);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://loanwise.onrender.com/api/loan-table"
      );
      setLoanData(response.data);
      const TotalLoans = response.data.reduce((acc, item) => acc + item.Disbursed, 0);
      setTotalAmountofLoans(TotalLoans.toFixed(2))
      const TotalRecovered = response.data.reduce((acc, item) => acc + item.Refunded, 0);
      setTotalRecoveredLoans(TotalRecovered.toFixed(2))
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
const numberOfDefaults = loanData.filter((loan) => loan.Default >= 1).length;



  return (
    <div className="cardGraphContainer">
      <div className="cardsContainer">
        <div className="dashCard">
          <div className="iconContainer">
            <img src={Arrows} alt="arrows" className="cardIcon" />
          </div>
          <span className="cardMetric">{loanDataLength}</span>
          <span className="cardText">Total Number of Loans</span>
        </div>
        <div className="dashCard">
          <div className="iconContainer">
            <img src={Cash} alt="money" className="cardIcon" />
          </div>
          <span className="cardMetric">N{totalAmountofLoans}</span>
          <span className="cardText">Total Amount of Loans</span>
        </div>
        <div className="dashCard">
          <div className="iconContainer">
            <img src={Arrows} alt="arrows" className="cardIcon" />
          </div>
          <span className="cardMetric">{numberOfDefaults}</span>
          <span className="cardText">Number of Loans in Default</span>
        </div>
        <div className="dashCard">
          <div className="iconContainer">
            <img src={Cash} alt="arrows" className="cardIcon" />
          </div>
          <span className="cardMetric">N{totalRecoveredLoans}</span>
          <span className="cardText">Total Recovered Loans</span>
        </div>
        {/* <div className="dashCard">
          <div className="iconContainer">
            <img src={Cash} alt="arrows" className="cardIcon" />
          </div>
          <span className="cardMetric">N8,500,000.00</span>
          <span className="cardText">Amount of Loans in Default</span>
        </div> */}
        {/* <div className="dashCard">
          <div className="iconContainer">
            <img src={CardIcon} alt="arrows" className="cardIcon" />
          </div>
          <span className="cardMetric">N6,000,000.00</span>
          <span className="cardText">Interest Earnings</span>
        </div> */}
      </div>
      <div className="line-bar-container">
        <Linechart />
        <Barchart />
      </div>
    </div>
  );
};

export default DashCardGraph;
