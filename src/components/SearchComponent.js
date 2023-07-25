import React, {useState} from "react";
import "../styles/SearchComponent.css"
import search from "../assets/search.svg"

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchTerm(value);
    setButtonClicked(false);
    if (!value){
      onSearch("")
    }
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    setButtonClicked(true);
  }

  setTimeout(() => {
    setButtonClicked(false);
  }, 1000);


  return (
    <div className="searchArea">
      <input
        className="searchInput"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search For Loans"
      />

      <button
        onClick={handleSearch}
        className={`searchButtton ${isButtonClicked ? "clicked" : ""}`}
      >
        <img src={search} alt="search icon" className="search-img" />
        <span className="search-text">Search</span>
      </button>
    </div>
  );
};

export default SearchComponent;