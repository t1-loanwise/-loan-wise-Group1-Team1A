import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/NewPortfolio.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function PersonalDetails() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Enter your full name"),
    resAddress: Yup.string()
      .required("Enter your residential address")
      .min(11, "Must be more than 11 characters"),
    email: Yup.string()
      .email()
      .required("Enter a valid email address")
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      ),
    altPhoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      ),
    dob: Yup.date().required("This field is is required"),
    number: Yup.string()
      .min(11, "Must be 11 characters")
      .required("This field is required"),
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
  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  const onSubmit = (data) => {
    updateUser(data);
    navigate("/portfolio/personalStatement");
  };

  return (
    <>
      <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_container">
          <div>
            <h2>Personal Information</h2>
            <div>
              <label className="input_title">Full Name</label>
              <div>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter full name"
                  {...register("fullName")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.fullName?.message}</div>
            </div>
            <div>
              <label className="input_title">Residential address</label>
              <div>
                <input
                  name="resAddress"
                  type="text"
                  placeholder="Enter address"
                  {...register("resAddress")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.resAddress?.message}</div>
            </div>
            <div>
              <label className="input_title">Email Address</label>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  {...register("email")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.email?.message}</div>
            </div>
            <div className="phone-container">
              <div>
                <label className="input_title">Phone Number</label>
                <div>
                  <input
                    name="phone"
                    type="phone"
                    placeholder="Enter number"
                    {...register("phoneNumber")}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors.phoneNumber?.message}</div>
              </div>
              <div>
                <label className="input_title">Alternative Phone Number</label>
                <div>
                  <input
                    name="phone"
                    type="phone"
                    placeholder="Enter number"
                    {...register("altPhoneNumber")}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors.altPhoneNumber?.message}</div>
              </div>
            </div>
            <div>
              <div>
                <label className="input_title">Date of Birth</label>
                <div>
                  <input
                    name="dob"
                    type="date"
                    placeholder="Enter number"
                    {...register("dob")}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors.dob?.message}</div>
              </div>
              <div>
                <label className="input_title">National Identity Number</label>
                <div>
                  <input
                    name="number"
                    type="number"
                    placeholder="Enter number"
                    {...register("number")}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors.number?.message}</div>
              </div>
            </div>
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
          </div>
          <div>
            <label className="input_title">Job Title</label>
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
              <label className="input_title">Length of Employment</label>
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
              <label className="input_title">Current Salary</label>
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
          <p className="auto_fill">Auto-fill from loan applications</p>
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
              <label className="input_title">Loan Category</label>
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
            <div>
              <label className="input_title">Amount</label>
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
              {errors.validityPeriod && (
                <p className="errorMsg">{errors.validityPeriod.message}</p>
              )}
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
              <div className="errorMsg">{errors.interestRate?.message}</div>
            </div>
          </div>
          <p className="auto_fill">Auto-fill from loan applications</p>
          <button className="form_btn">Proceed</button>
        </div>
      </form>
    </>
  );
}

export default PersonalDetails;
