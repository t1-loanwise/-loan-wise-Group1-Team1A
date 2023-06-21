import React, { useEffect, useState } from "react";
import "../styles/LoanTabble.css";
import leftarrow from "../assets/paginationleftarrow.svg";
import rightarrow from "../assets/paginationrightarrow.svg";
import { Link } from "react-router-dom";
import LoanWiseData from "./loanWiseData.json";

const LoanTabble = ({ searchTerm}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [showAllData, setShowAllData] = useState(false);
  const handlePageChange = (pageNumber) => { setCurrentPage(pageNumber)};
  const filteredData = LoanWiseData.filter((data) => {
    const searchData = Object.values(data).join(" ").toLowerCase();
    return searchData.includes(searchTerm.toLowerCase());
  });
  const displayedData = showAllData
    ? filteredData
    : filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );

  return (
    <>
      <div className="taable">
        <div className="trs trs1">
          <div className="ths">ID</div>
          <div className="ths"> Name</div>
          <div className="ths">Category</div>
          <div className="ths">Amount</div>
          <div className="ths">Due Date</div>
          <div className="ths">Status</div>
        </div>

        {displayedData.map((data) => (
          <Link
            className="table-link"
            to={`/customer/${data.name}`}
            key={data.name}
          >
            <div className="trs">
              <div className="tds">{data.customer_id}</div>
              <div className="tds">{data.name}</div>
              <div className="tds">{data.Category}</div>
              <div className="tds"> N{data.Requested}</div>
              <div className="tds">{data["Due date"]}</div>
              <div className={data["Loan status"]}>
                <button>{data["Loan status"]}</button>
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
            { length: Math.ceil(LoanWiseData.length / itemsPerPage) },
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

          {currentPage < Math.ceil(LoanWiseData.length / itemsPerPage) - 4 && (
            <p>...</p>
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(LoanWiseData.length / itemsPerPage)
            }
          >
            <img
              style={{
                opacity:
                  currentPage === Math.ceil(LoanWiseData.length / itemsPerPage)
                    ? 0.5
                    : 1,
              }}
              src={rightarrow}
              alt="Right Arrow"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default LoanTabble;
