import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/NewPortfolio.css";
import { useState } from "react";
import axios from "axios";

const INITIAL_STATE = {
  fullName: "",
  address: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
  bvn: "",
};
const NewBorrowerDetails = ({ nextStep, customer_id }) => {
  const [data, setData] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);
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
    const user = { ...event };
    console.log(user);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://loanwise.onrender.com/api/borrowers-details",
        user
      );

      console.log(response.data);
      console.log(response.data.borrower.customer_id);
      customer_id(response.data.borrower.customer_id);
      console.log(response);
      setData(INITIAL_STATE);
      setError(null);
      nextStep();
    } catch (error) {
      setError(error);
      setLoading(false);
      console.log(error);
    }
  };

  //Endpoint - 'https://loanwise.onrender.com/api/borrowers-details'

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
                  onChange={handleChange}
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
                <div className="errorMsg">{errors?.fullName?.message}</div>
              </div>
            </div>
            <div>
              <label className="input_title">Residential address</label>
              <div>
                <input
                  name="address"
                  type="text"
                  placeholder="Enter address"
                  onChange={handleChange}
                  {...register("address", {
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
                <div className="errorMsg">{errors?.address?.message}</div>
              </div>
            </div>
            <div>
              <label className="input_title">Email Address</label>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  onChange={handleChange}
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
                    type="tel"
                    placeholder="Enter number"
                    onChange={handleChange}
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
                  onChange={handleChange}
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
                    name="dateOfBirth"
                    type="date"
                    placeholder="Enter number"
                    onChange={handleChange}
                    {...register("dateOfBirth", {
                      required: "This field is required",
                    })}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors?.dateOfBirth?.message}</div>
              </div>
            </div>
            <div>
              <label className="input_title">Bank Verification Number</label>
              <div>
                <input
                  name="bvn"
                  type="number"
                  placeholder="Enter number"
                  onChange={handleChange}
                  {...register("bvn", {
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
              <div className="errorMsg">{errors?.bvn?.message}</div>
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
