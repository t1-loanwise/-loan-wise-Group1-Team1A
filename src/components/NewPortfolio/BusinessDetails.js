import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../styles/NewPortfolio.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function BusinessDetails() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Enter your business name"),
    busAddress: Yup.string()
      .required("Enter your business address")
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
    dor: Yup.date().required("This field is is required"),
    number: Yup.string()
      .min(11, "Must be more than 11 characters")
      .required("This field is required"),
    busOwner: Yup.string().required("Enter full name"),
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
    navigate("/portfolio/businessStatement");
  };
  return (
    <div className="rightContent">
      <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_container">
          <div>
            <h2>Business Information</h2>
            <div>
              <label className="input_title">Business Name</label>
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
              <label className="input_title">Business address</label>
              <div>
                <input
                  name="busAddress"
                  type="text"
                  placeholder="Enter address"
                  {...register("busAddress")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.busAddress?.message}</div>
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
                    name="phoneNumber"
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
                    name="altPhoneNumber"
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
                <label className="input_title">Date of Registration</label>
                <div>
                  <input
                    name="dor"
                    type="date"
                    placeholder="Enter number"
                    {...register("dor")}
                    className="input_field"
                  />
                </div>
                <div className="errorMsg">{errors.dor?.message}</div>
              </div>
              <div>
                <label className="input_title">CAC Reg. No</label>
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
              <label className="input_title">Business Owner</label>
              <div>
                <input
                  name="busOwner"
                  type="text"
                  placeholder="Enter full name"
                  {...register("busOwner")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">{errors.busOwner?.message}</div>
            </div>
          </div>
          <p className="auto_fill">Auto-fill from loan applications</p>
          <button className="form_btn">Proceed</button>
        </div>
      </form>
    </div>
  );
}

export default BusinessDetails;
