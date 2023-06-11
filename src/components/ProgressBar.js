import { useState } from "react";
import "../styles/NewPortfolio.css";
import PersonalDetails from "./NewPortfolio/PersonalDetails";
import PersonalStatementAnalysis from "./NewPortfolio/PersonalStatementAnalysis";
import AnalysisResult from "./NewPortfolio/AnalysisResult";

function ProgressBar() {
  const [barFiller, setBarFiller] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [circleFiller1, setCircleFiller1] = useState(false);
  const [circleFiller2, setCircleFiller2] = useState(false);
  const handleClick2 = () => {
    setBarFiller(true);
    setIsFull(false);
    setCircleFiller1(true);
    setCircleFiller2(true);
  };
  return (
    <>
      <div className="progress_bar">
        <div
          className={`${
            barFiller
              ? isFull
                ? "filler active1"
                : "filler active2"
              : "filler"
          }`}
        ></div>
        <div className="progress_circle1"></div>
        <div
          className={`${
            circleFiller1 ? "progress_circle2 active" : "progress_circle2"
          }`}
        ></div>
        <div
          className={`${
            circleFiller2 ? "progress_circle3 active" : "progress_circle3"
          }`}
        ></div>
      </div>
      <PersonalDetails />
      <PersonalStatementAnalysis />
      <AnalysisResult />
    </>
  );
}

export default ProgressBar;
