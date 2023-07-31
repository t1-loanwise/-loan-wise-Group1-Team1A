import React, { useState } from "react";
import Logo from "../../assets/Vector.svg";
import { useForm } from "react-hook-form";
import AuthenticationMainText from "../../components/AuthenticationMainText";
import "../../styles/Auth.css";
import Onboarding from "../../components/Onboarding";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PasswordReset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const navigate = useNavigate();
  const [passwordReset, setPasswordReset] = useState(null);
  const [error, setError] = useState(false);
  const onSubmit = async () => {
    try {
      const response = await axios.post(
        `https://loanwise.onrender.com/api/forget-password`,
        {
          email: getValues("email"),
        }
      );
      setPasswordReset(response.data);
      setError(false);
      localStorage.setItem("resetEmail", getValues("email"));
      navigate("/verifyEmail");
      console.log(response.data);
    } catch (error) {
      setError(true);
      reset();
    }
  };

  console.log({ ...register("email") });
  return (
    <div className="verify_container">
      <Onboarding />
      <div className="reset_head_content">
        <div className="logo_container">
          <img src={Logo} alt="Loanwise Logo" className="Logo-loanwise2" />
        </div>
        <div className="reset_body_content">
          <AuthenticationMainText
            Title={"Forgot Password?"}
            Body={"We’ve got you, please enter your registered email address"}
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
              <span className="registered-user">
                Incorrect Email Address!!.
              </span>
            )}
            <div className="form-control">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input
                type="text"
                placeholder="Enter answer"
                name="email"
                className="email-box"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}
            </div>
            <button className="verify_btn">
              {isSubmitting ? (
                <i className="fa fa-circle-o-notch fa-spin"></i>
              ) : (
                "Proceed"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
