import React from 'react'
import arrow from '../assets/darrow.svg'
import filtericonn from "../assets/filtericon.svg"
import "../styles/searchFiltersDate.css"

const SearchFilterDate = () => {
  return (
    <div className="searchFilterDate">
      <div className='searchFilter'>
        <div className='searchArea'>
            <input type="search" placeholder='Search For Loans'/>
            <button type="submit" className='searchButtton'>Search</button>
        </div>

        <div className='filterArea'>
            <img src={filtericonn} alt= "filter icon" />
            <span>Filter</span>
        </div>
      </div>
        
        <div className='dateArea'>
            <img src={arrow} alt="arrow icon" />
            <input type="date" value="date" />
        </div>
    </div>
  )
}

export default SearchFilterDate