import React from "react";
import { NavLink } from "react-router-dom";

function AnalysisNavBar() {
  return (
    <>
      <nav className="new_portfolio_nav_bar">
        <ul>
          <li>
            <NavLink to="analysisResult/overview">
              <span>Overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="analysisResult/cashFlow">
              <span>Cash Flow</span>
            </NavLink>
          </li>
          <NavLink to="analysisResult/income">
            <span>Income</span>
          </NavLink>
          <li>
            <NavLink to="analysisResult/spend">
              <span>Spend</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="analysisResult/behavioral">
              <span>Behavioral</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="analysisResult/transactionPattern">
              <span>Transaction Pattern</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AnalysisNavBar;
