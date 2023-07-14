import React, { useEffect, useState } from "react";
// import loanWiseData from "../../../components/loanWiseData.json";
import face from "../../../assets/WireframeB.svg";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const BorrowersDetails = () => {
  const { customerName } = useParams();
  const location = useLocation();
  const [details, setDetails] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
const loanWiseData = async() => {
  try {
    const response = await axios.get(`https://loanwise.onrender.com/api/loan-table`)
    console.log(response.data);
    setDetails(response.data)
    setError(false)
  } catch(error) {
    setError(true)
  }
}

loanWiseData()
  }, []);

  const borrowersDetails = details.filter((data) => data.name === customerName);

  return (
    <div className="rightContent ">
      <div className="borrowers">
        {borrowersDetails.map((data) => (
          <div key={data.name} className="borrowersDetailsContainer">
            <div className="borrowersDetails">
              <img src={face} alt="" />
              <div className="details-minus-image">
                <div>
                  <span>Customer ID:</span>
                  <span>{data.customer_id}</span>
                </div>
                <div>
                  <span>Name:</span>
                  <span>{data.name}</span>
                </div>
                <div>
                  <span>Address:</span>
                  <span>{data.Address}</span>
                </div>
                <div>
                  <span>Email Address:</span>
                  <span>{data.email}</span>
                </div>
                <div>
                  <span>Phone Number:</span>
                  <span>{"0" + data["phone_number"]}</span>
                </div>
                <div>
                  <span>Annual Income</span>
                  <span>{data["annual_income"]}</span>
                </div>
                <div>
                  <span>Years of Employment:</span>
                  <span>{data["total_years_of_employment"]}</span>
                </div>
              </div>
            </div>
            <div className="details-history-analysis">
              <div className="dha-links">
                <NavLink
                  to={`/customer/${data.name}/loan-details`}
                  activeClassName="active"
                  exact
                >
                  Loan Details
                </NavLink>
                <NavLink
                  to={`/customer/${data.name}/loan-history`}
                  activeClassName="active"
                >
                  Loan History
                </NavLink>
              </div>
              <Outlet />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorrowersDetails;
