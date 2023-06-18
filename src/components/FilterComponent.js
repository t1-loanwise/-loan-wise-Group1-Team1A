import React from "react";
import filtericonn from "../assets/filtericon.svg"
import "../styles/FilterComponent.css"

const FilterComponent = () => {
  return (
    <>
      <button className="filterArea">
        <img src={filtericonn} alt="filter icon" />
        <span>Filter</span>
        {/* <select>
          <option>Default Loans</option>
          <option>Active Loans</option>
          <option>Pending Loans</option>
          <option>Date</option>
        </select> */}
      </button>
    </>
  );
};

export default FilterComponent;
