import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
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

const generatePDF = () => {
  const report = new jsPDF("portrait", "pt", "a4");

  const fontSize = 10;
  report.setFontSize(fontSize);

  const headingY = 30;
  const dataY = 50;

  report.setFont("bold");
  report.text("ID", 30, headingY);
  report.text("Name", 120, headingY);
  report.text("Category", 220, headingY);
  report.text("Amount", 300, headingY);
  report.text("Due Date", 400, headingY);
  report.text("Status", 500, headingY);
  report.setFont("normal");

  // Iterate over the filteredData array instead of currentItems
  filteredData.forEach((data, index) => {
    const y = dataY + index * 20;
    report.text(data.customer_id, 30, y);
    report.text(data.name, 120, y);
    report.text(data.Category, 220, y);
    report.text(`N${data.Requested}`, 300, y);
    report.text(data["Due date"], 400, y);
    report.text(data["Loan status 2"], 500, y);
  });

  report.save("report.pdf");
};



  return (
    <div className="p-t-container">
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
        <div className="select-option2">
          <select className="sort-bar" value={sortOption} onChange={handleSort}>
            <option value="category">Business</option>
            <option value="">Personal</option>
          </select>
        </div>
      </div>
      <div className="card">
        <div className="OverviewContainer">
          <p className="overviewHeader">Portfolio Overview</p>
          <Link to="#">
            <button className="DownloadBtn" onClick={generatePDF}>Download</button>
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
              <div className="tds">N{data.Disbursed}</div>
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
    </div>
  );
};

export default Table
