import React from "react";
import Cash from "../assets/moneys.svg";
import Arrows from "../assets/arrowsUpDown.svg";
import CardIcon from "../assets/card-receive.svg";
import "../styles/cardGraph.css";
import Barchart from "./BarChart";
import Linechart from "./Linechart";

const DashCardGraph = () => {
  return (
    <div>
      <div className="cardGraphContainer">
        <div className="tremorCard">
          <div className="iconContainer">
            <img src={Arrows} alt="arrows" className="cardTremorIcon" />
          </div>
          <span className="cardTremorMetric">1200</span>
          <span className="cardTremorText">Total Number of Loans</span>
        </div>
        <div className="tremorCard">
          <div className="iconContainer">
            <img src={Cash} alt="money" className="cardTremorIcon" />
          </div>
          <span className="cardTremorMetric">N30,500,000.00</span>
          <span className="cardTremorText">Total Amount of Loans</span>
        </div>
        <div className="tremorCard">
          <div className="iconContainer">
            <img src={Arrows} alt="arrows" className="cardTremorIcon" />
          </div>
          <span className="cardTremorMetric">350</span>
          <span className="cardTremorText">Number of Loans in Default</span>
        </div>
        <div className="tremorCard">
          <div className="iconContainer">
            <img src={Cash} alt="arrows" className="cardTremorIcon" />
          </div>
          <span className="cardTremorMetric">N12,000,000.00</span>
          <span className="cardTremorText">Total Recovered Loans</span>
        </div>
        <div className="tremorCard">
          <div className="iconContainer">
            <img src={Cash} alt="arrows" className="cardTremorIcon" />
          </div>
          <span className="cardTremorMetric">N8,500,000.00</span>
          <span className="cardTremorText">Amount of Loans in Default</span>
        </div>
        <div className="tremorCard">
          <div className="iconContainer">
            <img src={CardIcon} alt="arrows" className="cardTremorIcon" />
          </div>
          <span className="cardTremorMetric">N6,000,000.00</span>
          <span className="cardTremorText">Interest Earnings</span>
        </div>
        <Linechart/>
        <Barchart/>
      </div>
    </div>
  );
};

export default DashCardGraph;
