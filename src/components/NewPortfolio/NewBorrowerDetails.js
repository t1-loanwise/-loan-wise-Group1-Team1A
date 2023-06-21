import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../styles/NewPortfolio.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function NewBorrowerDetails() {
  const navigate = useNavigate();
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

  return (
    <>
      <form>
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
            <div>
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
                <label className="input_title">Bank Verification Number</label>
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
          </div>
        </div>
      </form>
    </>
  );
}

export default NewBorrowerDetails;
