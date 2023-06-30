import React, { useState } from "react";
import "../../../styles/UpperDash.css";
import "../../../styles/LowerDash.css";
import "../../../styles/searchFiltersDate.css";
import DashCardGraph from "../../../components/DashCardGraph";
import SearchComponent from "../../../components/SearchComponent";
import FilterComponent from "../../../components/FilterComponent";
import LoanTabble from "../../../components/LoanTabble";


const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState(null);

  const handleSearch = (searchTerm) => {setSearchTerm(searchTerm)};

  const handleFilterChange = (filterOption) => {
    setFilterOption(filterOption)
  }

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
                <FilterComponent onFilterChange={handleFilterChange} />
              </div>
            </div>
          </div>
          <DashCardGraph />
          <LoanTabble searchTerm={searchTerm} filterOption={filterOption} />
        </div>
    </div>
  );
};

export default Dashboard;
