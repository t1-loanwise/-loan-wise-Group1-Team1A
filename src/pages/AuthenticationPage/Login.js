import React, { useState } from "react";
import Logo from "../../components/Logo";
import "../../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Onboarding from "../../components/Onboarding";
import show from "../../assets/show.png";
import hide from "../../assets/hide.png";
import AuthenticationMainText from "../../components/AuthenticationMainText";
import axios from "axios";
import { async } from "q";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();
  const navigate = useNavigate();
  const [getData, setGetData] = useState(null);
  const [error, setError] = useState(null);
  const [Submitting, setSubmitting] = useState(false);

  const [showPswd, setShowPswd] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPswd(showPswd ? false : true);
  };
  const onSubmit = async () => {
    try {
      setSubmitting(true);
      const response = await axios.post(
        "https://loanwise.onrender.com/api/login",
        {
          email: getValues("email"),
          password: getValues("password"),
        }
      );
      console.log(response.data);
      setGetData(response.data);
      setError(null);
      navigate("/dashboard");
    } catch (errors) {
      console.log(errors);
      setError(true);
      setSubmitting(false);
    }
  };
  return (
    <div className="loginParent-container">
      <Onboarding />
      <div className="login-text-container">
        <div className="logo-container2">
          <Logo />
        </div>
        <div className="login-message">
          <AuthenticationMainText
            Title="Welcome Back!"
            Body="Enter your details to sign in"
          />
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form-control">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                {...register("email", { required: true })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="errorMsg">Email is required</p>
              )}
            </div>
            <div className="login-form-control2">
              <label>Password</label>
              <div className="password-input-container">
                <div className="passwordToggle">
                  <input
                    className="pass-input"
                    type={showPswd ? "text" : "password"}
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: {
                        pattern:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s).{6,20}$/,
                        value: 6,
                      },
                    })}
                  />
                  <img
                    src={showPswd ? hide : show}
                    onClick={togglePasswordVisibility}
                    alt="show or hide password"
                  />
                </div>
              </div>

              {errors.password && errors.password.type === "required" && (
                <p className="errorMsg">Password is required</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="errorMsg">
                  Password should be at-least 6 characters
                </p>
              )}
            </div>
            <div className="stay-login-container">
              <div className="check-btn-container">
                {errors.checkbox && errors.checkbox.type === "required" && (
                  <p className="errorMsg">*</p>
                )}
                <input
                  type="checkbox"
                  name="checkbox"
                  {...register("checkbox", {
                    required: true,
                  })}
                  className="check-btn"
                />
                <label>
                  <span>Keep me signed in</span>
                </label>
              </div>
              <div>
                <Link className="forgotpass-btn" to="/reset">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div>
              <button type="submit" className="login-Btn">
                {isSubmitting ? (
                  <i className="fa fa-circle-o-notch fa-spin"></i>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>
        </div>
        <Link to="/register" className="forgotpass-btn">
          Don’t have an account? Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
