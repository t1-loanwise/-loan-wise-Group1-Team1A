import React, { useState } from "react";
import "../styles/LoanTabble.css";
import leftarrow from "../assets/paginationleftarrow.svg";
import rightarrow from "../assets/paginationrightarrow.svg";
import userss from "./TableDaata";

const LoanTabble = ({searchTerm}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page
  const [showAllData, setShowAllData] = useState(false);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = userss.filter((data) => {
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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {displayedData.map((data, index) => (
            <tr key={index}>
              <td>{data.ID}</td>
              <td>{data.Name}</td>
              <td>{data.Category}</td>
              <td>{data.Amount}</td>
              <td>{data.DueDate}</td>
              <td className={data.Status}>
                <button>{data.Status}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
            { length: Math.ceil(userss.length / itemsPerPage) },
            (_, i) => {
              if (i + 1 > currentPage + 2) return null;
              if (i + 1 >= currentPage - 2) {
                return (
                  <button
                    key={i}
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                );
              }
              return null;
            }
          )}

          {currentPage < Math.ceil(userss.length / itemsPerPage) - 4 && (
            <p>...</p>
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(userss.length / itemsPerPage)}
          >
            <img
              style={{
                opacity:
                  currentPage === Math.ceil(userss.length / itemsPerPage)
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
