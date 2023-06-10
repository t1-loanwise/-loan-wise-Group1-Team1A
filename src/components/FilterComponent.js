import React from "react";
import filtericonn from "../assets/filtericon.svg"
import "../styles/FilterComponent.css"

const FilterComponent = () => {
  return (
    <>
      <button className="filterArea">
        <img src={filtericonn} alt="filter icon" />
        <span>Filter</span>
      </button>
    </>
  );
};

export default FilterComponent;
