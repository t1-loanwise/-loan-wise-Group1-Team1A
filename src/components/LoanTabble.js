import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/LoanTabble.css";
import leftarrow from "../assets/paginationleftarrow.svg";
import rightarrow from "../assets/paginationrightarrow.svg";
import { Link } from "react-router-dom";

const LoanTabble = ({ searchTerm, filterOption }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loanData, setLoanData] = useState([]);
  const itemsPerPage = 5;

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = searchTerm
    ? loanData.filter((data) => {
        const searchData = Object.values(data).join(" ").toLowerCase();
        return searchData.includes(searchTerm.toLowerCase());
      })
    : loanData;

  const applyFilter = (data) => {
    switch (filterOption) {
      case "default":
        return data.filter((item) => item["loan_status"] === "Defaulted");
      case "active":
        return data.filter((item) => item["loan_status"] === "Active");
      case "completed":
        return data.filter((item) => item["loan_status"] === "Completed");
      case "all":
        return data.sort(
          (a, b) => new Date(a["Due date"]) - new Date(b["Due date"])
        );
      default:
        return data;
    }
  };

  const displayedData = applyFilter(filteredData).slice(
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
              <div className="tds">{data["due_date"]}</div>
              <div className={data["loan_status"]}>
                <button>{data["loan_status"]}</button>
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
            { length: Math.ceil(filteredData.length / itemsPerPage) },
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

          {currentPage < Math.ceil(filteredData.length / itemsPerPage) - 4 && (
            <p>...</p>
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(filteredData.length / itemsPerPage)
            }
          >
            <img
              style={{
                opacity:
                  currentPage === Math.ceil(filteredData.length / itemsPerPage)
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
