import React, { useState } from "react";
import PortfolioOviewData from '../../components/Portfolio/PortfolioOverview'
import styles from '../../styles/PortfolioTable.css';
import Table from "../../components/Table";
import { NavLink, Link } from "react-router-dom";

const PortfolioOverviewTable  = () => {
  const [PortfolioOverview] = useState([...PortfolioOviewData]);
  return (
    <div className="container">
      <div className="OverviewContainer">
        <p className="overviewHeader">Portfolio Overview</p>
        <Link to="#">
              <button className="DownloadBtn">Download</button>
            </Link>
      </div>
      <div className={styles.wrapper}>
        <Table data={PortfolioOverview} rowsPerPage={6} />
      </div>
      <NavLink className="PortfolioHistory">View all Portfolio history</NavLink>
    </div>
  );
}

export default PortfolioOverviewTable