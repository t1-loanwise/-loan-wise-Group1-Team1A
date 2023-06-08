import React from "react";
// import AnalysisResult from "../../components/NewPortfolio/AnalysisResult";
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
      <div className="analysis_header">
        <h3>Customer’s ID: Loan 12341</h3>
        <div className="analysis_header_content">
          <button className="analysis_header_btn">View Statement</button>
          <button className="analysis_header_btn">Download</button>
          <Calendar className="analysis_header_end" />
        </div>
      </div>
      <AnalysisNavBar />
      <AnalysisResult />
    </div>
  );
};

export default Portfolio;
