import React from "react";
import loanWiseData from "../../components/loanWiseData.json";
import face from "../../assets/Wireframe Avatar (3).svg";
import { NavLink, Outlet } from "react-router-dom";

const BorrowersDetails = () => {
  return (
    <div className="rightContent">
      {loanWiseData.map((data) => (
        <div key={data.customer_id}>
          <div>
            <img src={face} alt="" />
            <div>
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
                <span>{data["Phone number"]}</span>
              </div>
              <div>
                <span>Annual Income</span>
                <span>{data["Annual Income"]}</span>
              </div>
              <div>
                <span>Years of Employment:</span>
                <span>{data["Total Years of Employment"]}</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <NavLink to={`details/${data.name}`}>Loan Details</NavLink>
              <NavLink to={`analysis/${data.name}`}>
                Analysis Result
              </NavLink>
              <NavLink to={`history/${data.name}`}>Loan History</NavLink>
            </div>
            <Outlet />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BorrowersDetails;
