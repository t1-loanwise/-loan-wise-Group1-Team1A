import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/NewPortfolio.css";
import { useState } from "react";
import axios from "axios";

const INITIAL_STATE = {
  customer_id: "",
  currentEmployer: "",
  currentRole: "",
  Annual_Income: "",
  Total_Years_of_Employment: "",
  Income_Debt_Ratio: "",
  No_of_Open_Credit_Lines: "",
  Credit_Utilization_Rate: "",
  No_of_Mortgage_Account: "",
  Loan_Purpose: "",
  Loan_Term: "",
  requestedAmount: "",
  Verification_by_Loan_Company: "",
  Application_Type: "",
};
function NewEmploymentDetails({ nextStep, customer_id, report }) {
  const [data, setData] = useState(INITIAL_STATE);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFormSubmit = async (event) => {
    console.log(event);
    event.customer_id = customer_id;
    const user = { ...event };
    console.log(user);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://loanwise.onrender.com/api/employment-details",
        user
      );

      console.log(response);
      console.log(response.data.message);
      report(response.data.message);
      setData(INITIAL_STATE);
      setError(null);
      nextStep();
    } catch (error) {
      setError(error);
      setLoading(false);
      console.log(error);
    }
  };

  //Endpoint - 'https://loanwise.onrender.com/api/employment-details'

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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
              <div className="phone-container">
                <div className="phone-container-div">
                  <label className="input_title">Annual Income</label>
                  <div>
                    <input
                      name="Annual_Income"
                      type="text"
                      placeholder="Enter answer"
                      onChange={handleChange}
                      {...register("Annual_Income", {
                        required: "This field is required",
                        pattern: {
                          value: /\b\d{4,}\b/,
                          message: "Invalid entry.",
                        },
                      })}
                      className="input_field"
                    />
                  </div>
                  <div className="errorMsg">
                    {errors?.Annual_Income?.message}
                  </div>
                </div>
                <div className="phone-container-div">
                  <label className="input_title">
                    Total Years of Employment
                  </label>
                  <div>
                    <input
                      name="Total_Years_of_Employment"
                      type="text"
                      placeholder="Enter answer"
                      onChange={handleChange}
                      {...register("Total_Years_of_Employment", {
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
                    {errors?.Total_Years_of_Employment?.message}
                  </div>
                </div>
              </div>
              <div className="phone-container">
                <div className="phone-container-div">
                  <label className="input_title">Income-Debt Ratio</label>
                  <div>
                    <input
                      name="Income_Debt_Ratio"
                      type="text"
                      placeholder="Enter answer"
                      onChange={handleChange}
                      {...register("Income_Debt_Ratio", {
                        required: "This field is required",
                        pattern: {
                          value: /^(-?\d+(\.\d+)?)?$/,
                          message: "Invalid entry.",
                        },
                      })}
                      className="input_field"
                    />
                  </div>
                  <div className="errorMsg">
                    {errors?.Income_Debt_Ratio?.message}
                  </div>
                </div>
                <div className="phone-container-div">
                  <label className="input_title">No of Open Credit Lines</label>
                  <div>
                    <input
                      name="No_of_Open_Credit_Lines"
                      type="text"
                      placeholder="Enter answer"
                      onChange={handleChange}
                      {...register("No_of_Open_Credit_Lines", {
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
                    {errors?.No_of_Open_Credit_Lines?.message}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label className="input_title">Credit Utilization Rate</label>
                  <div>
                    <input
                      name="Credit_Utilization_Rate"
                      type="text"
                      placeholder="Enter answer"
                      onChange={handleChange}
                      {...register("Credit_Utilization_Rate", {
                        required: "This field is required",
                        pattern: {
                          value: /^(?=.*\d)(?=.*\W).+$/,
                          message: "Invalid entry.",
                        },
                      })}
                      className="input_field"
                    />
                  </div>
                  <div className="errorMsg">
                    {errors?.Credit_Utilization_Rate?.message}
                  </div>
                </div>
                <div>
                  <label className="input_title">No of Mortgage Account</label>
                  <div>
                    <input
                      name="No_of_Mortgage_Account"
                      type="text"
                      placeholder="Enter answer"
                      onChange={handleChange}
                      {...register("No_of_Mortgage_Account", {
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
                    {errors?.No_of_Mortgage_Account?.message}
                  </div>
                </div>
              </div>

              <h3>Loan Information</h3>
              <div>
                <label className="input_title">Loan Purpose</label>
                <div>
                  <input
                    name="Loan_Purpose"
                    type="text"
                    placeholder="Enter answer"
                    onChange={handleChange}
                    {...register("Loan_Purpose", {
                      required: "This field is required",
                      minLength: {
                        value: 8,
                        message: "Must be more than 8 characters",
                      },
                    })}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors?.Loan_Purpose?.message}</div>
              </div>
              <div className="phone-container">
                <div className="phone-container-div">
                  <label className="input_title">Loan Term</label>
                  <div>
                    <input
                      name="Loan_Term"
                      type="text"
                      placeholder="Enter answer"
                      onChange={handleChange}
                      {...register("Loan_Term", {
                        required: "This field is required",
                        minLength: {
                          value: 2,
                          message: "Must be more than 2 characters",
                        },
                      })}
                      className="input_field"
                    />
                  </div>
                  <div className="errorMsg">{errors?.Loan_Term?.message}</div>
                </div>
                <div className="phone-container-div">
                  <label className="input_title">Requested Amount</label>
                  <div>
                    <input
                      name="requestedAmount"
                      type="number"
                      placeholder="$0.00"
                      onChange={handleChange}
                      {...register("requestedAmount", {
                        required: "This field is required",
                        pattern: {
                          value: /\b\d{4,}\b/,
                          message: "Invalid entry.",
                        },
                      })}
                      className="input_field"
                    />
                  </div>
                  <div className="errorMsg">
                    {errors?.requestedAmount?.message}
                  </div>
                </div>
              </div>
              <div className="phone-container">
                <div className="phone-container-div">
                  <label className="input_title">
                    Loan Company Verification
                  </label>
                  <select
                    name="Verification_by_Loan_Company"
                    onChange={handleChange}
                    {...register("Verification_by_Loan_Company", {
                      required: "This field is required",
                    })}
                    className="input_field"
                  >
                    <option disabled value="">
                      Select option
                    </option>
                    <option value="Verified">True</option>
                    <option value="Not verified">False</option>
                  </select>
                  <div className="errorMsg">
                    {errors?.Verification_by_Loan_Company?.message}
                  </div>
                </div>
                <div className="phone-container-div">
                  <label className="input_title">Application Type</label>
                  <div>
                    <input
                      name="Application_Type"
                      type="text"
                      onChange={handleChange}
                      {...register("Application_Type", {
                        required: "This field is required",
                      })}
                      className="input_field"
                    />
                  </div>
                  <div className="errorMsg">
                    {errors?.Application_Type?.message}
                  </div>
                </div>
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
