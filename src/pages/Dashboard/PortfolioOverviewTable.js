import React, { useState } from "react";
import PortfolioOviewData from "../../components/Portfolio/Data";
import styles from "../../styles/PortfolioTable.css";
import Table from "../../components/Table";
import { NavLink, Link } from "react-router-dom";
import PortfolioBarChart from "../../components/Portfolio/PortfolioBarChart";
import PortfolioLineChart from "../../components/Portfolio/PortfolioLineChart";


const PortfolioOverviewTable = () => {
  const [PortfolioOverview] = useState([...PortfolioOviewData]);
  const [dropMenu, setDropMenu] = useState(false);

  const toggleDropMenu = () => {
    setDropMenu((prevState) => !prevState);
  };

  return (
    <div className="cardGraphContainer1">
      <div className="btn">
        <div className={`dropdown ${dropMenu ? "show-dropdown" : ""}`}>
          <button className="portfolio-button" onClick={toggleDropMenu}>
            <span>+ New Portfolio</span>
          </button>
          <ul className={`dropdown-menu ${dropMenu ? "show-dropdown" : ""}`}>
            <li>
              <NavLink activeClassName="active" to="/portfolio/newPortfolio">
                <p className="dropdown-nav">Personal</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/portfolio/businessDetails">
                <p className="dropdown-nav">Business</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="chart">
        <PortfolioBarChart />
        <PortfolioLineChart />
      </div>
      <div className="card">
        <div className={styles.wrapper}>
          <Table Data={PortfolioOverview} rowsPerPage={6} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverviewTable;
