import React, { useEffect, useState } from "react";
// import loanWiseData from "../../../components/loanWiseData.json";
import face from "../../../assets/WireframeB.svg";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import axios from "axios";

const PerformanceAnalysis = () => {
 const { customerName } = useParams();
 const location = useLocation();
 const [details, setDetails] = useState([]);
 const [error, setError] = useState(false);

 useEffect(() => {
   const loanWiseData = async () => {
     try {
       const response = await axios.get(
         `https://loanwise.onrender.com/api/loan-table`
       );
       setDetails(response.data);
       setError(false);
     } catch (error) {
       setError(true);
     }
   };

   loanWiseData();
 }, []);

 const customerDetails = details.filter((data) => data.fullName === customerName);


  //   const loanStatus = loanWiseData.filter((data) => data["Loan status 2"] === data["Loan status 2"])
  //   console.log(loanStatus);
  return (
    <div className="rightContent ">
      <div className="borrowers">
        {customerDetails.map((data) => (
          <div key={data.fullName} className="borrowersDetailsContainer">
            <div className="borrowersDetails">
              <img src={face} alt="" />
              <div className="details-minus-image">
                <div className="details-border">
                  <span>Customer ID:</span>
                  <span>{data.customer_id}</span>
                </div>
                <div className="details-border">
                  <span>Name:</span>
                  <span>{data.fullName}</span>
                </div>
                <div className="details-border">
                  <span>Address:</span>
                  <span>{data.address}</span>
                </div>
                <div className="details-border">
                  <span>Email Address:</span>
                  <span>{data.email}</span>
                </div>
                <div className="details-border">
                  <span>Phone Number:</span>
                  <span>{"0" + data["phone_number"]}</span>
                </div>
                <div className="details-border">
                  <span>Annual Income</span>
                  <span>{data.EmploymentData["Annual_Income"]}</span>
                </div>
                <div className="details-border">
                  <span>Years of Employment:</span>
                  <span>
                    {data.EmploymentData["Total_years_of_employment"]}
                  </span>
                </div>
              </div>
            </div>
            <div className="details-history-analysis">
              <div className="dha-links">
                <NavLink
                  to={`/customer/${data.fullName}/loan-details`}
                  activeClassName="active"
                  exact
                >
                  Loan Details
                </NavLink>
                <NavLink
                  to={`/customer/${data.fullName}/loan-history`}
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

export default PerformanceAnalysis;
