import React, { useState } from "react";
import "../../styles/UpperDash.css";
import "../../styles/LowerDash.css";
import "../../styles/searchFiltersDate.css";
import DashCardGraph from "../../components/DashCardGraph";
import SearchComponent from "../../components/SearchComponent";
import FilterComponent from "../../components/FilterComponent";
import LoanTableHeading from "../../components/LoanTableHeading";
import LoanTabble from "../../components/LoanTabble";


const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (searchTerm) => {setSearchTerm(searchTerm)};

  return (
    <div>
        <div className="rightContent">
          <div className="uppsDash">
            <h3 className="explore">
              Explore insightful analyses and risk assessment to make informed
              lending decisions.
            </h3>
            <div className="searchFilterDate">
              <div className="searchFilter">
                <SearchComponent onSearch={handleSearch} />
                <FilterComponent />
              </div>
            </div>
          </div>
          <DashCardGraph />
          <LoanTableHeading />
          <hr />
          <LoanTabble searchTerm={searchTerm} />
        </div>
    </div>
  );
};

export default Dashboard;
