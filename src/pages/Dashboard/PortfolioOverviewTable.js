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
        <div className={`dropdown ${dropMenu ? "show-dropdown2" : ""}`}>
          <button className="portfolio-button" onClick={toggleDropMenu}>
            <span>+ New Portfolio</span>
          </button>
          <ul className={`dropdown-menu2 ${dropMenu ? "show-dropdown2" : ""}`}>
            <li>
              <Link
                className="dropdown-nav"
                to="/portfolio/newPortfolio"
              >
                Personal
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-nav"
                to="/portfolio/businessDetails"
              >
                Business
              </Link>
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
