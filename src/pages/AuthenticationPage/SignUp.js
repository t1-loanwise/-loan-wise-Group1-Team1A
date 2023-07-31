import React, { useState } from "react";
import AuthenticationMainText from "../../components/AuthenticationMainText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import show from "../../assets/show.png";
import hide from "../../assets/hide.png";
import Logo from "../../assets/Vector.svg";
import { Link, useNavigate } from "react-router-dom";
import Onboarding from "../../components/Onboarding";
import axios from "axios";

const SignUp = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your full name"),
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
    radioBtn: Yup.boolean().oneOf([true], "You need to accept terms of service and privacy policy"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = useForm(formOptions);
  const [showPswd, setShowPswd] = useState(false);
  const [showConfirmPswd, setShowConfirmPswd] = useState(false);

  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPswd(showPswd ? false : true);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPswd(showConfirmPswd ? false : true);
  };
  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "https://loanwise.onrender.com/api/signup",
        {
          name: getValues("name"),
          email: getValues("email"),
          password: getValues("password"),
          confirmPassword: getValues("confirmPassword"),
        }
      );
      console.log(response.data);
      setFormData(response.data);
      setError(false);
      localStorage.setItem("email", getValues("email"));
      localStorage.setItem("userName", getValues("name"));
      navigate("/verifyRegistration");
    } catch (error) {
      console.log(error);
      setError(true);
      reset();
    }
  };
  return (
    <div className="createAccount_parentContainer">
      <Onboarding />

      <div className="createAccountContainer">
        <div className="loanwiselogo-container">
          <img src={Logo} alt="Loanwise Logo" className="Logo-loanwise2" />
        </div>
        <div className="createAccount">
          <AuthenticationMainText Title="Create an account" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete={"off"}
            className="createAccount_form"
          >
            {error && (
              <span className="registered-user">
                User already registered. Please <Link to="/login">sign in</Link>
                .
              </span>
            )}

            <div className="formInputContainer">
              <label htmlFor="name">Full name</label>
              <div className="inputDiv">
                <input
                  name="name"
                  type="text"
                  placeholder="Enter full name"
                  {...register("name")}
                  className="name-email-input"
                />
              </div>
              <div className="signUpErrorMsg">{errors.name?.message}</div>
            </div>

            <div className="formInputContainer">
              <label htmlFor="email">Email Address</label>
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
                <label htmlFor="password">Password</label>
                <div className="passwordToggle inputDiv">
                  <input
                    name="password"
                    type={showPswd ? "text" : "password"}
                    {...register("password")}
                    className={` ${errors.password ? "is-invalid" : ""}`}
                    /*  */
                  />
                  <img
                    src={showPswd ? show : hide}
                    onClick={togglePasswordVisibility}
                    alt="show or hide password"
                  />
                </div>
              </div>

              <div className="confirmPswd">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="passwordToggle inputDiv">
                  <input
                    name="confirmPassword"
                    type={showConfirmPswd ? "text" : "password"}
                    {...register("confirmPassword")}
                    className={` ${errors.confirmPassword ? "is-invalid" : ""}`}
                  />
                  <img
                    src={showConfirmPswd ? show : hide}
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
            <div className="signUpErrorMsg">{errors.radioBtn?.message}</div>

            <button
              type="submit"
              className="createAccountBtn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <i className="fa fa-circle-o-notch fa-spin"></i>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
        </div>
        <Link className="toLoginPageBtn" to="/login">
          Already have an account? Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
