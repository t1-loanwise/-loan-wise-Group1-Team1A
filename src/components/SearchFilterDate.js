import React from 'react'
import "../styles/searchFiltersDate.css"
import SearchComponent from './SearchComponent'
import FilterComponent from './FilterComponent'
import CalendarComponent from './CalendarComponent'

const SearchFilterDate = () => {
  return (
    <div className="searchFilterDate">
      <div className='searchFilter'>
        <SearchComponent style />
        <FilterComponent />
      </div>
      <CalendarComponent />
    </div>
  )
}

export default SearchFilterDate