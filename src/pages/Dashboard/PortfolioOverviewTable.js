import React, { useState } from "react";
import PortfolioOviewData from "../../components/Portfolio/Data";
import styles from "../../styles/PortfolioTable.css";
import Table from "../../components/Table";
import { NavLink, Link } from "react-router-dom";
import PortfolioBarChart from "../../components/Portfolio/PortfolioBarChart";
import PortfolioLineChart from "../../components/Portfolio/PortfolioLineChart";
import Icon from "../../assets/searchIcon.png";

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
              <NavLink activeClassName="active" to="/portfolio/personalDetails">
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
      <div className="customerSort">
        <div className="customerID">
          <span>Search Customer ID</span>
          <span>
            <img className="searchIcon" src={Icon} alt="searchIcon" />
          </span>
        </div>
        <div className="select-option">
          <select>
            <option disabled selected value="">Sort by category</option>
            <option value="">Business</option>
            <option value="1">Personal</option>
            <option value="2">Student</option>
            <option value="3">Mortgage</option>
          </select>
        </div>

      </div>
      <div className="card">
        <div className="OverviewContainer">
          <p className="overviewHeader">Portfolio Overview</p>
          <Link to="#">
            <button className="DownloadBtn">Download</button>
          </Link>
        </div>
        <hr />
        <div className={styles.wrapper}>
          <Table data={PortfolioOverview} rowsPerPage={6} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverviewTable;
