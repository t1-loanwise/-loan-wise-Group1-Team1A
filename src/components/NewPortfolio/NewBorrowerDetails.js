import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/NewPortfolio.css";
import { useState } from "react";
import axios from "axios";

const NewBorrowerDetails = ({ nextStep }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleFormSubmit = async (event) => {
    const user = {
      fullName: data.fullName,
      address: data.resAddress,
      email: data.email,
      phoneNumber: data.phoneNumber,
      dateOfBirth: data.dob,
      bvn: data.number,
    };
    try {
      setLoading(true);
      const response = await axios.post(
        "https://loanwise.onrender.com/borrowers-details",
        user
      );
      nextStep();
      console.log(response);
      console.log(response.data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };

  //Endpoint - 'https://loanwise.onrender.com/borrowers-details'

  return (
    <>
      <form className="input-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form_container">
          <div className="details-form">
            <h2>Personal Information</h2>
            <div>
              <label className="input_title">Full Name</label>
              <div>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter full name"
                  {...register("fullName", {
                    required: "Enter your full name",
                    minLength: {
                      value: 2,
                      message: "Must be more than 2 characters",
                    },
                  })}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">
                {errors.fullName && <p>{errors.fullName.message}</p>}
              </div>
            </div>
            <div>
              <label className="input_title">Residential address</label>
              <div>
                <input
                  name="resAddress"
                  type="text"
                  placeholder="Enter address"
                  {...register("resAddress", {
                    required: "Enter your residential address",
                    minLength: {
                      value: 11,
                      message: "Must be more than 11 characters",
                    },
                  })}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">
                {errors.resAddress && (
                  <p className="errorMsg">{errors.resAddress.message}</p>
                )}
              </div>
            </div>
            <div>
              <label className="input_title">Email Address</label>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  {...register("email", {
                    required: "Enter a valid email address",
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Email is not valid.",
                    },
                  })}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors?.email?.message}</div>
            </div>
            <div>
              <div>
                <label className="input_title">Phone Number</label>
                <div>
                  <input
                    name="phone"
                    type="phone"
                    placeholder="Enter number"
                    {...register("phoneNumber", {
                      required: "Enter a valid phone number",
                      pattern: {
                        value:
                          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                        message: "Phone number is not valid.",
                      },
                    })}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors?.phoneNumber?.message}</div>
              </div>
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
            </div>
            <div>
              <div>
                <label className="input_title">Date of Birth</label>
                <div>
                  <input
                    name="dob"
                    type="date"
                    placeholder="Enter number"
                    {...register("dob", {
                      required: "This field is required",
                    })}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors?.dob?.message}</div>
              </div>
            </div>
            <div>
              <label className="input_title">Bank Verification Number</label>
              <div>
                <input
                  name="number"
                  type="number"
                  placeholder="Enter number"
                  {...register("number", {
                    required: "This field is required",
                    minLength: {
                      value: 11,
                      message: "Must be 11 numbers",
                    },
                    pattern: {
                      value: /^\d{11}$/,
                      message: "BVN is not valid.",
                    },
                  })}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors?.number?.message}</div>
            </div>
          </div>
        </div>
        <button className="new_portfolio_btn" type="submit">
          Proceed
        </button>
      </form>
    </>
  );
};

export default NewBorrowerDetails;
