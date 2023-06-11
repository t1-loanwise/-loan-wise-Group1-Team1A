import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function LoanInfo() {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  return (
    <>
      <h3>Loan Information</h3>
      <div>
        <label className="input_title">Loan Purpose</label>
        <div>
          <input
            name="loanPurpose"
            type="text"
            placeholder="Enter answer"
            {...register("loanPurpose")}
            className="input_field"
          />
        </div>
        <div className="ErrorMsg">{errors.loanPurpose?.message}</div>
      </div>
      <div>
        <div>
          <label className="input_title">Loan Category</label>
          <select {...register("select")} className="input_field">
            <option value="Choose answer">Choose answer</option>
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
            <option value="Mortgage">Mortgage</option>
            <option value="Student">Student</option>
          </select>
          {errors.select && <p>{errors.select.message}</p>}
        </div>
        <div>
          <label className="input_title">Amount</label>
          <div>
            <input
              name="loanPurpose"
              type="number"
              placeholder="$0.00"
              {...register("amount")}
              className="input_field"
            />
          </div>
          <div className="ErrorMsg">{errors.loanPurpose?.message}</div>
        </div>
      </div>
      <div>
        <div>
          <label className="input_title">Validity Period</label>
          <select {...register("validityPeriod")} className="input_field">
            <option value="Choose answer">Choose answer</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
            <option value="1 Year">1 Year</option>
            <option value=">1 Year"> above 1 Year</option>
          </select>
          {errors.select && <p>{errors.select.message}</p>}
        </div>
        <div>
          <label className="input_title">Interest Rate</label>
          <div>
            <input
              name="interestRate"
              type="number"
              placeholder="$0.00"
              {...register("interestRate")}
              className="input_field"
            />
          </div>
          <div className="ErrorMsg">{errors.interestRate?.message}</div>
        </div>
      </div>
    </>
  );
}

export default LoanInfo;
