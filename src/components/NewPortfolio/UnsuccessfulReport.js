import React from "react";
import fail from "../../assets/close-circle.svg";

function UnsuccessfulReport() {
  return (
    <>
      <div className="result-img">
        <img src={fail} alt="fail" />
        <p>
          Borrower is likely to default on this loan amount, consider a lesser
          amount
        </p>
      </div>
    </>
  );
}

export default UnsuccessfulReport;
