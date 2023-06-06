import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";

function AnalysisResult() {
  return (
    <>
      <ProgressBar />
      AnalysisResult
      <nav>
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
