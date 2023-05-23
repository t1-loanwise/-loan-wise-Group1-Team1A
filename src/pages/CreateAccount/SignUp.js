import React, { useState } from "react";
import onboardingImg from "../../assets/SignUpDesign.svg";
import "../../components/Logo";
import Logo from "../../components/Logo";
import "../../components/AuthenticationMainText";
import { AuthenticationMainText } from "../../components/AuthenticationMainText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import show from "../../assets/show.png";
import hide from "../../assets/hide.png";


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
    <div>
      <div>
        <img src={onboardingImg} alt="Loan analysis graph image" />
      </div>
      <div>
        <Logo />
        <div>
          <AuthenticationMainText title="Create an account" />
          <form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
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
              <div>
                <input
                  name="password"
                  type={showPswd ? "text" : "password"}
                  {...register("password")}
                  className={` ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <img
                  src={showPswd ? show : hide}
                  onClick={togglePasswordVisibility}
                />
              </div>
              <div className="">{errors.password?.message}</div>
            </div>

            <div className="">
              <label>Confirm Password</label>
              <div>
                <input
                  name="confirmPassword"
                  type={showConfirmPswd ? "text" : "password"}
                  {...register("confirmPassword")}
                  className={` ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                />
                <img
                  src={showConfirmPswd ? show : hide}
                  onClick={toggleConfirmPasswordVisibility}
                />
              </div>
              <div className="">{errors.confirmPassword?.message}</div>
            </div>
            <div className="">
                <input
                  name="Terms&Conditions"
                  type="radio"
                  {...register("radioBtn")}
                  className={` ${
                    errors.radioBtn ? "is-invalid" : ""
                  }`}
              />I agree to the terms of service and privacy policy
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
