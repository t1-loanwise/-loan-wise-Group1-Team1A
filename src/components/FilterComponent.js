import React, { useState, useEffect, useRef } from "react";
import filtericonn from "../assets/filtericon.svg";
import "../styles/FilterComponent.css";

const FilterComponent = ({onFilterChange}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Filter")
  const filterRef = useRef(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleFilterChange = (filterOption) => {
    if (filterOption === "all") {
      setSelectedOption("Filter");
    } else {
      setSelectedOption(filterOption)
    }
    setShowOptions(false);
    onFilterChange(filterOption);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="filterContainer">
      <button className="filterArea" onClick={toggleOptions} ref={filterRef}>
        <img src={filtericonn} alt="filter icon" />
        <span>{selectedOption}</span>
      </button>

      {showOptions && (
        <div className="filter_options">
          <span className="spann" onClick={() => handleFilterChange("default")}>Defaulted Loans</span>
          <span className="spann" onClick={() => handleFilterChange("active")}>Active Loans</span>
          <span className="spann" onClick={() => handleFilterChange("completed")}>Completed Loans</span>
          <span className="spann" onClick={() => handleFilterChange("all")}>All</span>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;