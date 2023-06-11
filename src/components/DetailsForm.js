import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function DetailsForm({ Title, text, address, date, number, subject }) {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(true),
    email: Yup.string().email().required("Enter a valid email address"),
    phoneNumber: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      )
      .required("Phone is required"),
    dob: Yup.date().required("Required"),
    number: Yup.string()
      .min(11, "Must be more than 11 characters")
      .required("This field is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm(formOptions);
  return (
    <>
      <div>
        <h2>{Title}</h2>
        <div>
          <label className="input_title">{text}</label>
          <div>
            <input
              name="fullName"
              type="text"
              placeholder="Enter full name"
              {...register("fullName")}
              className="input_field"
            />
          </div>
          <div className="ErrorMsg">{errors.fullName?.message}</div>
        </div>
        <div>
          <label className="input_title">{address}</label>
          <div>
            <input
              name="resAddress"
              type="text"
              placeholder="Enter address"
              {...register("resAddress")}
              className="input_field"
            />
          </div>
          <div className="ErrorMsg">{errors.address?.message}</div>
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
          <div className="ErrorMsg">{errors.email?.message}</div>
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
            <div className="ErrorMsg">{errors.phoneNumber?.message}</div>
          </div>
          <div>
            <label className="input_title">Alternative Phone Number</label>
            <div>
              <input
                name="phone"
                type="phone"
                placeholder="Enter number"
                {...register("phoneNumber")}
                className="input_field"
              />
            </div>
            <div className="ErrorMsg">{errors.PhoneNumber?.message}</div>
          </div>
        </div>
        <div>
          <div>
            <label className="input_title">{date}</label>
            <div>
              <input
                name="dob"
                type="date"
                placeholder="Enter number"
                {...register("dob")}
                className="input_field"
              />
            </div>
            <div className="ErrorMsg">{errors.dob?.message}</div>
          </div>
          <div>
            <label className="input_title">{number}</label>
            <div>
              <input
                name="number"
                type="number"
                placeholder="Enter number"
                {...register("number")}
                className="input_field"
              />
            </div>
            <div className="ErrorMsg">{errors.number?.message}</div>
          </div>
        </div>
        <div>
          <label className="input_title">{subject}</label>
          <div>
            <input
              name="fullName"
              type="text"
              placeholder="Enter full name"
              {...register("fullName")}
              className="input_field"
            />
          </div>
          <div className="ErrorMsg">{errors.fullName?.message}</div>
        </div>
      </div>
    </>
  );
}

export default DetailsForm;
