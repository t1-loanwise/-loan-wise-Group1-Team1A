import React, { useState } from "react";
import "../../../styles/UpperDash.css";
import "../../../styles/LowerDash.css";
import "../../../styles/searchFiltersDate.css";
import DashCardGraph from "../../../components/DashCardGraph";
import SearchComponent from "../../../components/SearchComponent";
import FilterComponent from "../../../components/FilterComponent";
import LoanTabble from "../../../components/LoanTabble";
import CalendarComponent from "../../../components/CalendarComponent";


const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleFilterChange = (filterOption) => {
    setFilterOption(filterOption);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


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
            </div>
            <div className="searchFilterDate2">
              <FilterComponent onFilterChange={handleFilterChange} />
              <CalendarComponent onDateChange={handleDateChange} />
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
