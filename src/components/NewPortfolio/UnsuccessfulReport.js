import React from "react";
import fail from "../../assets/close-circle.svg";

function UnsuccessfulReport() {
  return (
    <>
      <h3>Customer’s ID: #012346789</h3>
      <div>
        <img src={fail} alt="pass" />
        <p>
          Borrower is likely to default on this loan amount, consider a lesser
          amount
        </p>
      </div>
    </>
  );
}

export default UnsuccessfulReport;
