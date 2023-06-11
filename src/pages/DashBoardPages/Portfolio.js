import React from "react";
import PersonalDetails from "../../components/NewPortfolio/PersonalDetails";
import BusinessDetails from "../../components/NewPortfolio/BusinessDetails";
import BusinessStatementAnalysis from "../../components/NewPortfolio/BusinessStatementAnalysis";
import PersonalStatementAnalysis from "../../components/NewPortfolio/PersonalStatementAnalysis";
import AnalysisResult from "../../components/NewPortfolio/AnalysisResult";
import ProgressBar from "../../components/ProgressBar";
import Calendar from "../../components/Calendar";
import AnalysisNavBar from "../../components/NewPortfolio/AnalysisNavBar";

const Portfolio = () => {
  return (
    <div className="rightContent">
      <ProgressBar />
      <PersonalDetails />
      <PersonalStatementAnalysis />
      <AnalysisResult />
    </div>
  );
};

export default Portfolio;
