import React from "react";
import Logo from "../../components/Logo";

import "../../styles/Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Onboarding from "../../components/Onboarding";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="loginParent-container">
      <Onboarding />
      <div className="login-text-container">
        <div className="logo-container2">
          <Logo />
        </div>
        <div className="login-message">
          <h3>Welcome Back!</h3>
          <p>Enter your details to sign in</p>
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
            <div className="login-form-control">
              <label>Password</label>
              <input
                type="password"
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
              <div className="check-btn">
                <input type="checkbox" name="password" />
                <label>Keep me signed in</label>
              </div>
              <div>
                <Link to="/reset">Forgot Password?</Link>
              </div>
            </div>
            <div>
              <button type="submit" className="login-Btn">
                Sign In
              </button>
            </div>
          </form>
          <div className="sign-up">
            <Link to="/register">
              <span> Don’t have an account? Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
