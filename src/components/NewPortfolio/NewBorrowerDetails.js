import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/NewPortfolio.css";

const NewBorrowerDetails = ({ errors }) => {
  const { register } = useForm();

  return (
    <>
      <form>
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
                  {...register("fullName")}
                  className="input_field"
                />
              </div>
              <div className="errorMsg">
                {errors && errors.fullName && (
                  <p>{errors.fullName.message || errors.fullName}</p>
                )}
              </div>
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
      </form>
    </>
  );
};

export default NewBorrowerDetails;
