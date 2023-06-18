import { useState } from "react";
import "../../styles/NewPortfolio.css";

function ProgressBar({ currentPage, activeStep }) {
  const totalSteps = 3;
  const progressBarValue = ((currentPage + 1) / totalSteps) * 100;

  return (
    <>
      <div className="progress_bar">
        <div className="filler" style={{ width: `${progressBarValue}%` }}></div>
        <div className="progress_circle1"></div>
        <div
          className={`progress_circle2  ${activeStep >= 2 ? "active" : ""}`}
        ></div>
        <div
          className={`progress_circle3  ${activeStep >= 3 ? "active" : ""}`}
        ></div>
      </div>
    </>
  );
}

export default ProgressBar;
