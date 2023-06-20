import React, {useEffect} from "react";
import loanWiseData from "../../components/loanWiseData.json";
import face from "../../assets/WireframeB.svg";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";


const BorrowersDetails = () => {
  const {customerName} = useParams();
  const location = useLocation()
   useEffect(() => {
     if (location.pathname === `/customer/${customerName}/loan-details`) {
       console.log("Index element is active on page load");
     }
   }, [location, customerName]);

  const borrowersDetails = loanWiseData.filter((data) => data.name === customerName);
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
                  <span>{"0" + data["Phone number"]}</span>
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
            <div className="details-history-analysis">
              <div className="dha-links">
                <NavLink
                  to={`/customer/${data.name}/loan-details`}
                  activeClassName="active"
                  exact={true}
                >
                  Loan Details
                </NavLink>
                <NavLink
                  to={`/customer/${data.name}/loan-analysis`}
                  activeClassName="active"
                >
                  Analysis Result
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
