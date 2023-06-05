import React from "react";
import Cash from "../assets/moneys.svg";
import Arrows from "../assets/arrowsUpDown.svg";
import CardIcon from "../assets/card-receive.svg";
import "../styles/cardGraph.css";
import Barchart from "./BarChart";
import Linechart from "./Linechart";

const dashCardGraph = () => {
  return (
    <div className="cardGraphContainer">
      <div className="cardsContainer">
        <div className="dashCard">
          <div className="iconContainer">
            <img src={Arrows} alt="arrows" className="cardIcon" />
          </div>
          <span className="cardMetric">1200</span>
          <span className="cardText">Total Number of Loans</span>
        </div>
        <div className="dashCard">
          <div className="iconContainer">
            <img src={Cash} alt="money" className="cardIcon" />
          </div>
          <span className="cardMetric">N30,500,000.00</span>
          <span className="cardText">Total Amount of Loans</span>
        </div>
        <div className="dashCard">
          <div className="iconContainer">
            <img src={Arrows} alt="arrows" className="cardIcon" />
          </div>
          <span className="cardMetric">350</span>
          <span className="cardText">Number of Loans in Default</span>
        </div>
        <div className="dashCard">
          <div className="iconContainer">
            <img src={Cash} alt="arrows" className="cardIcon" />
          </div>
          <span className="cardMetric">N12,000,000.00</span>
          <span className="cardText">Total Recovered Loans</span>
        </div>
        <div className="dashCard">
          <div className="iconContainer">
            <img src={Cash} alt="arrows" className="cardIcon" />
          </div>
          <span className="cardMetric">N8,500,000.00</span>
          <span className="cardText">Amount of Loans in Default</span>
        </div>
      </div>
      <div className="line-bar-container">
        <div className="dashCard">
          <div className="iconContainer">
            <img src={CardIcon} alt="arrows" className="cardIcon" />
          </div>
          <span className="cardMetric">N6,000,000.00</span>
          <span className="cardText">Interest Earnings</span>
        </div>
        <Linechart />
        <Barchart />
      </div>
    </div>
  );
};

export default dashCardGraph;
