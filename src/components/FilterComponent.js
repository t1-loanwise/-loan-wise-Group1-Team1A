import React, { useState } from "react";
import filtericonn from "../assets/filtericon.svg"
import "../styles/FilterComponent.css"

const FilterComponent = () => {

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }
  return (
    <>
      <button className="filterArea" onClick={toggleOptions}>
        <img src={filtericonn} alt="filter icon" />
        <span>Filter</span>
      </button>

      {showOptions && (
        <div className="filter_options">
          <span>Default Loans</span>
          <span>Active Loans</span>
          <span>Pending Loans</span>
          <span>Date</span>
        </div>
      )}
    </>
  );
};

export default FilterComponent;
