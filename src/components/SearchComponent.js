import React from "react";
import "../styles/SearchComponent.css"

const SearchComponent = () => {
  return (
    <div className="searchArea">
        <input className="searchInput" type="search" placeholder="Search For Loans" />
        <button type="submit" className="searchButtton">
          Search
        </button>
    </div>
  );
};

export default SearchComponent;
