import React, { useState } from "react";
import RuleOptions from "./RuleOptions";
import PlusSign from "../assets/icons/ant-design_plus-outlined.svg";
import Delete from "../assets/icons/trash.svg";

const NewConditionBtn = () => {
  return (
    <>
      <div className="main-container">
        <div className="variable-container">
          <div className="select">
            <select>
              <option value="">Select</option>
              <option value="1">Bank Statement Name Match</option>
              <option value="2">Average balance</option>
              <option value="3">Closing balance</option>
              <option value="4">Account Activity</option>
              <option value="5">Number of Credit Transactions</option>
              <option value="6">Number of Debit Transactions</option>
              <option value="7">Number of other loan amount</option>
              <option value="8">Number of Transacting months</option>
              <option value="9">Average Salary</option>
              <option value="10">Total Debit Turnover</option>
              <option value="11">Total Credit Turnover</option>
              <option value="12">Current Closing Balance</option>
              <option value="13">Salary Frequency</option>
            </select>
          </div>
        </div>
        <div className="Operator-container">
          <div className="select">
            <select>
              <option value="">Select</option>
              <option value="1">Less than</option>
              <option value="2">Less than or equal to</option>
              <option value="3">Greater than</option>
              <option value="4">Greater than or equal to</option>
              <option value="5">Equal to</option>
              <option value="6">Tally with</option>
            </select>
          </div>
        </div>
        <div className="value">
          <div>
            <input type="text" placeholder="input" readOnly />
            <div className="delete-btn-container">
              <div className="delete">
                <p>Delete</p>
                <span>
                  <img src={Delete} alt="Delete" width="18px" height="18px" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewConditionBtn;
