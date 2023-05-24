import React, { useState } from "react";
import Logo from "../../../components/Logo";
import { AuthenticationMainText } from "../../../components/AuthenticationMainText";
import AuthenticationImage from "../../../components/AuthenticationImage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import show from "../../../assets/show.png";
import hide from "../../../assets/hide.png";
import "../../../styles/createAccount.css";

const SignUp = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Enter your full name"),
    email: Yup.string().email().required("Enter a valid email address"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
        "Password must be in this format @JohnDoe54"
      )
      .min(6, "Password must contain at least 6 characters including numbers"),
    confirmPassword: Yup.string()
      .required("Please confirm password")
      .oneOf([Yup.ref("password")], "Passwords do not match!"),
    radioBtn: Yup.string().required(true),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const [showPswd, setShowPswd] = useState(false);
  const [showConfirmPswd, setShowConfirmPswd] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPswd(showPswd ? false : true);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPswd(showConfirmPswd ? false : true);
  };

  const onSubmit = (data) => {
    console.log(data);
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    reset();
  };

  return (
    <div className="signUp_parentContainer">
        <AuthenticationImage/>
      <div className="createAnAccountContainer">
        <div className="loanwiselogo-container">
          <Logo />
        </div>
        <div className="createAnAccount">
          <AuthenticationMainText Title="Create an account" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete={"off"}
            className="sign-up_form"
          >
            <div>
              <label>Full name</label>
              <div>
                <input
                  name="fullName"
                  type="text"
                  {...register("fullName")}
                  className={`form-control ${
                    errors.fullName ? "is-invalid" : ""
                  }`}
                />
              </div>
              <div className="">{errors.fullName?.message}</div>
            </div>

            <div>
              <label>Email Address</label>
              <div>
                <input
                  name="email"
                  type="email"
                  {...register("email")}
                  className={` ${errors.email ? "is-invalid" : ""}`}
                />
              </div>
              <div className="">{errors.email?.message}</div>
            </div>

            <div className="">
              <label>Password</label>
              <div className="passwordToggle">
                <input
                  name="password"
                  type={showPswd ? "text" : "password"}
                  {...register("password")}
                  className={` ${errors.password ? "is-invalid" : ""}`}
                />
                <img
                  src={showPswd ? hide :show}
                  onClick={togglePasswordVisibility}
                  alt="show or hide password"
                />
              </div>
              <div className="">{errors.password?.message}</div>
            </div>

            <div className="">
              <label>Confirm Password</label>
              <div className="passwordToggle">
                <input
                  name="confirmPassword"
                  type={showConfirmPswd ? "text" : "password"}
                  {...register("confirmPassword")}
                  className={` ${errors.confirmPassword ? "is-invalid" : ""}`}
                />
                <img
                  src={showConfirmPswd ? hide :show}
                  onClick={toggleConfirmPasswordVisibility}
                  alt="show or hide password"
                />
              </div>
              <div className="">{errors.confirmPassword?.message}</div>
            </div>
            <div className="">
              <input
                name="Terms&Conditions"
                type="radio"
                {...register("radioBtn")}
                className={` radio-btn ${errors.radioBtn ? "is-invalid" : ""}`}
              />
              I agree to the terms of service and privacy policy
              <div className="">{errors.radioBtn?.message}</div>
            </div>

            <button type="submit" className="">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
