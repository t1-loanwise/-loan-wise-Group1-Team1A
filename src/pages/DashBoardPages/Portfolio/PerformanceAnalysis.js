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

 const customerDetails = details.filter((data) => data.name === customerName);


  //   const loanStatus = loanWiseData.filter((data) => data["Loan status 2"] === data["Loan status 2"])
  //   console.log(loanStatus);
  return (
    <div className="rightContent ">
      <div className="borrowers">
        {customerDetails.map((data) => (
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
                  to={`/prediction/${data.name}/loan-details`}
                  activeClassName="active"
                  exact
                >
                  Loan Details
                </NavLink>
                <NavLink
                  to={`/prediction/${data.name}/loan-analysis`}
                  activeClassName="active"
                  exact
                >
                  Analysis Result
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
