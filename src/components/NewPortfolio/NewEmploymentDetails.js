import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/NewPortfolio.css";

function NewEmploymentDetails({ nextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = (data) => {
    nextStep();
    console.log(data);
  };
  return (
    <>
      <form className="input-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="flex-form">
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
                    {...register("currentEmployer", {
                      required: "This field is required",
                      minLength: {
                        value: 2,
                        message: "Must be more than 2 characters",
                      },
                    })}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">
                  {errors?.currentEmployer?.message}
                </div>
              </div>
              <div>
                <label className="input_title">Current Role</label>
                <div>
                  <input
                    name="currentRole"
                    type="text"
                    placeholder="Enter answer"
                    {...register("currentRole", {
                      required: "This field is required",
                      minLength: {
                        value: 2,
                        message: "Must be more than 2 characters",
                      },
                    })}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors?.currentRole?.message}</div>
              </div>
              <div>
                <div>
                  <label className="input_title">Annual Income</label>
                  <div>
                    <input
                      name="annualIncome"
                      type="text"
                      placeholder="Enter answer"
                      {...register("annualIncome", {
                        required: "This field is required",
                        pattern: {
                          value: /\b\d{6,}\b/,
                          message: "Invalid entry.",
                        },
                      })}
                      className="input_field"
                    />
                  </div>
                  <div className="errorMsg">
                    {errors?.annualIncome?.message}
                  </div>
                </div>
              </div>
              <div>
                <label className="input_title">Total Years of Employment</label>
                <div>
                  <input
                    name="employmentLength"
                    type="text"
                    placeholder="Enter answer"
                    {...register("employmentLength", {
                      required: "This field is required",
                      pattern: {
                        value: /\b\d{1,}\b/,
                        message: "Invalid entry.",
                      },
                    })}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">
                  {errors?.employmentLength?.message}
                </div>
              </div>
              <div>
                <div>
                  <label className="input_title">Income-Debt Ratio</label>
                  <div>
                    <input
                      name="idRatio"
                      type="text"
                      placeholder="Enter answer"
                      {...register("idRatio", {
                        required: "This field is required",
                        pattern: {
                          value: /^(-?\d+(\.\d+)?)?$/,
                          message: "Invalid entry.",
                        },
                      })}
                      className="input_field"
                    />
                  </div>
                  <div className="errorMsg">{errors?.idRatio?.message}</div>
                </div>
              </div>
              <div>
                <label className="input_title">No of Open Credit Lines</label>
                <div>
                  <input
                    name="openCredit"
                    type="text"
                    placeholder="Enter answer"
                    {...register("openCredit", {
                      required: "This field is required",
                      pattern: {
                        value: /\b\d{1,}\b/,
                        message: "Invalid entry.",
                      },
                    })}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors?.openCredit?.message}</div>
              </div>
              <div>
                <div>
                  <label className="input_title">Credit Utilization Rate</label>
                  <div>
                    <input
                      name="cuRate"
                      type="text"
                      placeholder="Enter answer"
                      {...register("cuRate", {
                        required: "This field is required",
                        pattern: {
                          value: /^(?=.*\d)(?=.*\W).+$/,
                          message: "Invalid entry.",
                        },
                      })}
                      className="input_field"
                    />
                  </div>
                  <div className="errorMsg">{errors?.cuRate?.message}</div>
                </div>
              </div>
              <div>
                <label className="input_title">No of Mortgage Account</label>
                <div>
                  <input
                    name="mortgageAccount"
                    type="text"
                    placeholder="Enter answer"
                    {...register("mortgageAccount", {
                      required: "This field is required",
                      pattern: {
                        value: /\b\d{1,}\b/,
                        message: "Invalid entry.",
                      },
                    })}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">
                  {errors?.mortgageAccount?.message}
                </div>
              </div>
              <h3>Loan Information</h3>
              <div>
                <label className="input_title">Loan Purpose</label>
                <div>
                  <input
                    name="loanPurpose"
                    type="text"
                    placeholder="Enter answer"
                    {...register("loanPurpose", {
                      required: "This field is required",
                      minLength: {
                        value: 8,
                        message: "Must be more than 8 characters",
                      },
                    })}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors?.loanPurpose?.message}</div>
              </div>
              <div>
                <div>
                  <label className="input_title">Loan Term</label>
                  <div>
                    <input
                      name="loanTerm"
                      type="text"
                      placeholder="Enter answer"
                      {...register("loanTerm", {
                        required: "This field is required",
                        minLength: {
                          value: 2,
                          message: "Must be more than 2 characters",
                        },
                      })}
                      className="input_field"
                    />
                  </div>
                  <div className="errorMsg">{errors?.loanTerm?.message}</div>
                </div>
              </div>
              <div>
                <label className="input_title">Requested Amount</label>
                <div>
                  <input
                    name="amount"
                    type="number"
                    placeholder="$0.00"
                    {...register("amount", {
                      required: "This field is required",
                      pattern: {
                        value: /\b\d{5,}\b/,
                        message: "Invalid entry.",
                      },
                    })}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors?.amount?.message}</div>
              </div>
              <div>
                <div>
                  <label className="input_title">
                    Loan Company Verification
                  </label>
                  <select
                    {...register("companyVerification", {
                      required: "This field is required",
                    })}
                    className="input_field"
                    placeholder="choose answer..."
                  >
                    <option disabled value="">
                      Choose answer...{" "}
                    </option>
                    <option value="Verified">Yes</option>
                    <option value="Not verified">No</option>
                  </select>
                  {errors?.companyVerification?.message && (
                    <p className="errorMsg">
                      {errors.companyVerification.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="input_title">Application Type</label>
                <div>
                  <input
                    name="appType"
                    type="number"
                    placeholder="$0.00"
                    {...register("appType")}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors?.appType?.message}</div>
              </div>
            </div>
          </div>
        </div>
        <button className="new_portfolio_btn" type="submit">
          Analyze
        </button>
      </form>
    </>
  );
}

export default NewEmploymentDetails;
