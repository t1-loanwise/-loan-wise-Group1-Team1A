import React, { useState } from "react";
import Logo from "../../../components/Logo";
import AuthenticationMainText from "../../../components/AuthenticationMainText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import show from "../../../assets/show.png";
import hide from "../../../assets/hide.png";
import { Link, useNavigate } from "react-router-dom";
import Onboarding from "../../../components/Onboarding";

const SignUp = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(true),
    email: Yup.string().email().required("Enter a valid email address"),
    password: Yup.string()
      .required(true)
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s).{6,20}$/,
        "Password must contain at least 6 characters including numbers"
      ),
    confirmPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password")], "Passwords do not match!"),
    radioBtn: Yup.string().required(true),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm(formOptions);
  const [showPswd, setShowPswd] = useState(false);
  const [showConfirmPswd, setShowConfirmPswd] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPswd(showPswd ? false : true);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPswd(showConfirmPswd ? false : true);
  };
  const onSubmit = (data) => {
    console.log(data);
    navigate("/securityQuestions");
  };

  return (
    <div className="createAccount_parentContainer">

       <Onboarding />
    
      <div className="createAccountContainer">
        <div className="loanwiselogo-container">
          <Logo />
        </div>
        <div className="createAccount">
          <AuthenticationMainText Title="Create an account" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete={"off"}
            className="createAccount_form"
          >
            <div className="formInputContainer">
              <label>Full name</label>
              <div className="inputDiv">
                <input
                  name="fullName"
                  type="text"
                  placeholder="Enter full name"
                  {...register("fullName")}
                  className="name-email-input"
                />
              </div>
              <div className="signUpErrorMsg">{errors.fullName?.message}</div>
            </div>

            <div className="formInputContainer">
              <label>Email Address</label>
              <div className="inputDiv">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  {...register("email")}
                  className={` name-email-input ${
                    errors.email ? "is-invalid" : ""
                  }`}
                />
              </div>
              <div className="signUpErrorMsg">{errors.email?.message}</div>
            </div>
            <div className="passwordContainer">
              <div className="passwd">
                <label>Password</label>
                <div className="passwordToggle inputDiv">
                  <input
                    name="password"
                    type={showPswd ? "text" : "password"}
                    {...register("password")}
                    className={` ${errors.password ? "is-invalid" : ""}`}
                  />
                  <img
                    src={showPswd ? hide : show}
                    onClick={togglePasswordVisibility}
                    alt="show or hide password"
                  />
                </div>
              </div>

              <div className="confirmPswd">
                <label>Confirm Password</label>
                <div className="passwordToggle inputDiv">
                  <input
                    name="confirmPassword"
                    type={showConfirmPswd ? "text" : "password"}
                    {...register("confirmPassword")}
                    className={` ${errors.confirmPassword ? "is-invalid" : ""}`}
                  />
                  <img
                    src={showConfirmPswd ? hide : show}
                    onClick={toggleConfirmPasswordVisibility}
                    alt="show or hide password"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="signUpErrorMsg">{errors.password?.message}</div>
              <div className="signUpErrorMsg">
                {errors.confirmPassword?.message}
              </div>
            </div>
            <div className="radioBtnContainer">
              <input
                name="Terms&Conditions"
                type="checkbox"
                {...register("radioBtn")}
                className={` radio-btn ${errors.radioBtn ? "is-invalid" : ""}`}
              />
              I agree to the terms of service and privacy policy
            </div>
            <div className="">{errors.radioBtn?.message}</div>

            <button type="submit" className="createAccountBtn">
              Create Account
            </button>
          </form>
          <Link className="toLoginPageBtn">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
