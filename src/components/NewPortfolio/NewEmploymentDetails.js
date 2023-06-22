import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../styles/NewPortfolio.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function NewEmploymentDetails() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    jobTitle: Yup.string().required("This field is required"),
    currentEmployer: Yup.string().required("This field is required"),
    employmentLength: Yup.string().required("This field is required"),
    currentSalary: Yup.string().required("This field is required"),
    loanPurpose: Yup.string().required("This field is required"),
    loanCategory: Yup.string()
      .required("This field is required")
      .oneOf(["Personal", "Business", "Mortgage", "Student"])
      .label("Loan Category"),
    date: Yup.date().required("This field is required"),
    amount: Yup.string().required("This field is required"),
    validityPeriod: Yup.string()
      .required("This field is required")
      .oneOf(["3 Months", "6 Months", "1 Year", "above 1 Year"])
      .label("Validity Period"),
    interestRate: Yup.string().required("This field is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm(formOptions);
  return (
    <>
      <form className="flex-form">
        <div className="form_container">
          <div className="details-form">
            <h2>Employment Information</h2>
            <div>
              <label className="input_title">Current Employer</label>
              <div>
                <input
                  name="currentEmployer"
                  type="text"
                  placeholder="Enter full name"
                  {...register("currentEmployer")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.currentEmployer?.message}</div>
            </div>
            <div>
              <label className="input_title">Current Role</label>
              <div>
                <input
                  name="jobTitle"
                  type="text"
                  placeholder="Enter answer"
                  {...register("jobTitle")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.jobTitle?.message}</div>
            </div>
            <div>
              <div>
                <label className="input_title">Annual Income</label>
                <div>
                  <input
                    name="currentSalary"
                    type="text"
                    placeholder="Enter answer"
                    {...register("currentSalary")}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors.currentSalary?.message}</div>
              </div>
            </div>
            <div>
              <label className="input_title">Total Years of Employment</label>
              <div>
                <input
                  name="employmentLength"
                  type="text"
                  placeholder="Enter answer"
                  {...register("employmentLength")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.employmentLength?.message}</div>
            </div>
            <div>
              <div>
                <label className="input_title">Income-Debt Ratio</label>
                <div>
                  <input
                    name="currentSalary"
                    type="text"
                    placeholder="Enter answer"
                    {...register("currentSalary")}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors.currentSalary?.message}</div>
              </div>
            </div>
            <div>
              <label className="input_title">No of Open Credit Lines</label>
              <div>
                <input
                  name="employmentLength"
                  type="text"
                  placeholder="Enter answer"
                  {...register("employmentLength")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.employmentLength?.message}</div>
            </div>
            <div>
              <div>
                <label className="input_title">Credit Utilization Rate</label>
                <div>
                  <input
                    name="currentSalary"
                    type="text"
                    placeholder="Enter answer"
                    {...register("currentSalary")}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors.currentSalary?.message}</div>
              </div>
            </div>
            <div>
              <label className="input_title">No of Mortgage Account</label>
              <div>
                <input
                  name="employmentLength"
                  type="text"
                  placeholder="Enter answer"
                  {...register("employmentLength")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.employmentLength?.message}</div>
            </div>
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
              <div className="errorMsg">{errors.loanPurpose?.message}</div>
            </div>
            <div>
              <div>
                <label className="input_title">Loan Term</label>
                <div>
                  <input
                    name="loanPurpose"
                    type="text"
                    placeholder="Enter answer"
                    {...register("loanPurpose")}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors.loanPurpose?.message}</div>
              </div>
            </div>
            <div>
              <label className="input_title">Requested Amount</label>
              <div>
                <input
                  name="amount"
                  type="number"
                  placeholder="$0.00"
                  {...register("amount")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.amount?.message}</div>
            </div>
            <div>
              <div>
                <label className="input_title">Loan Company Verification</label>
                <select {...register("loanCategory")} className="input_field">
                  <option value="Choose answer">Choose answer</option>
                  <option value="Personal">Personal</option>
                  <option value="Business">Business</option>
                  <option value="Mortgage">Mortgage</option>
                  <option value="Student">Student</option>
                </select>
                {errors.loanCategory && (
                  <p className="errorMsg">{errors.loanCategory.message}</p>
                )}
              </div>
            </div>
            <div>
              <label className="input_title">Application Type</label>
              <div>
                <input
                  name="interestRate"
                  type="number"
                  placeholder="$0.00"
                  {...register("interestRate")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.interestRate?.message}</div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default NewEmploymentDetails;
