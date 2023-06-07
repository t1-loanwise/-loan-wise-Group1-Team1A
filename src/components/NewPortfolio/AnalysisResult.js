import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import Calendar from "../Calendar";

function AnalysisResult() {
  return (
    <>
      <ProgressBar />
      <div className="analysis_header">
        <h3>Customer’s ID: Loan 12341</h3>
        <div className="analysis_header_content">
          <button className="analysis_header_btn">View Statement</button>
          <button className="analysis_header_btn">Download</button>
          <Calendar className="analysis_header_end" />
        </div>
      </div>
      <nav className="new_portfolio_nav_bar">
        <NavLink to="/analysisResult/overview">Overview</NavLink>
        <NavLink to="/analysisResult/cashFlow">Cash Flow</NavLink>
        <NavLink to="/analysisResult/income">Income</NavLink>
        <NavLink to="/analysisResult/spend">Spend</NavLink>
        <NavLink to="/analysisResult/behavioral">Behavioral</NavLink>
        <NavLink to="/analysisResult/transactionPattern">
          Transaction Pattern
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default AnalysisResult;
