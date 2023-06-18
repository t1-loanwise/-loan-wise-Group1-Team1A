import React, { useState } from "react";
import "../styles/LoanTabble.css";
import leftarrow from "../assets/paginationleftarrow.svg";
import rightarrow from "../assets/paginationrightarrow.svg";
import userss from "./TableDaata";
import { Link } from "react-router-dom";

const LoanTabble = ({searchTerm}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
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
      <table className="taable">
        <thead>
          <tr className="trs">
            <th className="ths">ID</th>
            <th className="ths">Name</th>
            <th className="ths">Category</th>
            <th className="ths">Amount</th>
            <th className="ths">Due Date</th>
            <th className="ths">Status</th>
          </tr>
        </thead>

        <tbody>
          {displayedData.map((data, index) => (
            <tr key={index} className="trs">
              <td className="tds">
                <Link className="table-link">{data.ID}</Link>
              </td>
              <td className="tds">
                <Link className="table-link">{data.Name}</Link>
              </td>
              <td className="tds">
                <Link className="table-link">{data.Category}</Link>
              </td>
              <td className="tds">
                <Link className="table-link">{data.Amount}</Link>
              </td>
              <td className="tds">
                <Link className="table-link">{data.DueDate}</Link>
              </td>
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
                    {i + 1}{" "}
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
