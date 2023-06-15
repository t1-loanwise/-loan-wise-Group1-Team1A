import React, { useState } from "react";
import '../styles/PortfolioTable.css';
import leftarrow from "../assets/p-leftarrow.svg";
import rightarrow from "../assets/p-rightarrow.svg";
import persons from "../components/Portfolio/Data";

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

    return (
      <>
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
          </thead>
  
          <tbody>
            {persons
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
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
  
        <div className="lowerlastdash">
          <div className="pagiNumbs">
            <img src={leftarrow}
              onClick={() => handlePageChange(currentPage - 1)}
            />
  
            {currentPage > 6 && <p>...</p>}
  
            {Array.from(
              { length: Math.ceil(persons.length / itemsPerPage) },
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
  
            {currentPage < Math.ceil(persons.length / itemsPerPage) - 4 && (
              <p>...</p>
            )}
  
            <button
              className={
                currentPage === Math.ceil(persons.length / itemsPerPage)
                  ? "active"
                  : ""
              }
              onClick={() =>
                handlePageChange(Math.ceil(persons.length / itemsPerPage))
              }
            >
              {Math.ceil(persons.length / itemsPerPage)}
            </button>
  
            <img
              src={rightarrow}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </div>
        </div>
      </>
    );
}

export default Table