import React from "react";
import success from "../../assets/success.svg";

function SuccessReport() {
  return (
    <>
      <div>
        <img src={success} alt="pass" />
        <p>
          Congratulations, borrower is not likely to default on this loan amount
        </p>
      </div>
    </>
  );
}

export default SuccessReport;
