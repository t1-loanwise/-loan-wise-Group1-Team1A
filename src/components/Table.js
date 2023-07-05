import React, { useEffect, useState } from "react";
import leftarrow from "../assets/paginationleftarrow.svg";
import rightarrow from "../assets/paginationrightarrow.svg";
import { Link } from "react-router-dom";
import "../styles/PortfolioTable.css";
import Icon from "../assets/searchIcon.png";
import axios from "axios";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loanData, setLoanData] = useState([]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  let filteredData = [];
  if (loanData && loanData.length > 0) {
    filteredData = loanData.filter((data) =>
      data.customer_id && data.customer_id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOption === "category") {
      filteredData.sort((a, b) => {
        if (a.Category && b.Category) {
          return a.Category.localeCompare(b.Category);
        }
        return 0;
      });
    }
  }

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://loanwise.onrender.com/api/loan-table"
        );
        setLoanData(response.data);
      } catch (error) {
        console.error("Error fetching loan data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="customerSort">
        <div className="customerID">
          <input
            type="text"
            placeholder="Search by ID"
            value={searchQuery}
            onChange={handleSearch}
          />
          <span>
            <img className="searchIcon" src={Icon} alt="searchIcon" />
          </span>
        </div>
        <div className="select-option">
          <select className="sort-bar" value={sortOption} onChange={handleSort}>
            <option value="category">Business</option>
            <option value="">Personal</option>
          </select>
        </div>
      </div>
      <div className="OverviewContainer">
        <p className="overviewHeader">Portfolio Overview</p>
        <Link to="#">
          <button className="DownloadBtn">Download</button>
        </Link>
      </div>
      <hr />
      <div className="taable">
        <div className="trs trs1">
          <div className="ths">ID</div>
          <div className="ths">Name</div>
          <div className="ths">Category</div>
          <div className="ths">Amount</div>
          <div className="ths">Due Date</div>
          <div className="ths">Status</div>
        </div>

        {currentItems.map((data) => (
          <Link
            className="table-link"
            to={`/prediction/${data.name}`}
            key={data.name}
          >
            <div className="trs">
              <div className="tds">{data.customer_id}</div>
              <div className="tds">{data.name}</div>
              <div className="tds">{data.Category}</div>
              <div className="tds">N{data.Requested}</div>
              <div className="tds">{data["due_date"]}</div>
              <div className={data["loan_status_2"]}>
                <button>{data["loan_status_2"]}</button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination-container">
        <div className="pagiNumbs">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
            disabled={currentPage === 1}
          >
            <img src={leftarrow} alt="Left Arrow" />
          </button>

          {currentPage > 5 && <p>...</p>}

          {Array.from(
            { length: Math.ceil(loanData.length / itemsPerPage) },
            (_, i) => {
              if (i + 1 > currentPage + 2) return null;
              if (i + 1 >= currentPage - 2) {
                return (
                  <button
                    key={i}
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}{" "}
                  </button>
                );
              }
              return null;
            }
          )}

          {currentPage < Math.ceil(loanData.length / itemsPerPage) - 4 && (
            <p>...</p>
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(loanData.length / itemsPerPage)}
          >
            <img
              style={{
                opacity:
                  currentPage === Math.ceil(loanData.length / itemsPerPage)
                    ? 0.5
                    : 1,
              }}
              src={rightarrow}
              alt="Right Arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
