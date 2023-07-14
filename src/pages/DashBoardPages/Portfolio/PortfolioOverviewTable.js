import React, { useState } from "react";
import PortfolioOviewData from "../../../components/Portfolio/Data";
import styles from "../../../styles/PortfolioTable.css";
import Table from "../../../components/Table";
import { NavLink, Link } from "react-router-dom";
import PortfolioBarChart from "../../../components/Portfolio/PortfolioBarChart";
import PortfolioLineChart from "../../../components/Portfolio/PortfolioLineChart";

const PortfolioOverviewTable = () => {
  const [PortfolioOverview] = useState([...PortfolioOviewData]);
  const [dropMenu, setDropMenu] = useState(false);

  const toggleDropMenu = () => {
    setDropMenu((prevState) => !prevState);
  };

  return (
    <div className="cardGraphContainer1">
      <div className="btn">
        <NavLink activeClassName="active" to="/portfolio/newPortfolio">
          <button className="portfolio-button">
            <span>+ New Portfolio</span>
          </button>
        </NavLink>
      </div>
      <div className="chart">
        <PortfolioBarChart />
        <PortfolioLineChart />
      </div>
      <div>
        <div className={styles.wrapper}>
          <Table Data={PortfolioOverview} rowsPerPage={6} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverviewTable;
