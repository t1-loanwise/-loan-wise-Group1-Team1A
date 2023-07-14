import React, { useRef, useState } from "react";
import Logo from "../../components/Logo";
import { useForm } from "react-hook-form";
import AuthenticationMainText from "../../components/AuthenticationMainText";
import "../../styles/Auth.css";
import Onboarding from "../../components/Onboarding";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateNewPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const navigate = useNavigate();
  const [passwordReset, setPasswordReset] = useState(null);
  const [error, setError] = useState(false);
  const onSubmit = async () => {
    try {
      const response = await axios.post(
        `https://loanwise.onrender.com/api/reset-password`,
        {
          recoveryCode: localStorage.getItem("resetToken"),
          newPassword: getValues("password"),
          confirmPassword: getValues("confirmpassword"),
        }
      );
      console.log(response.data);
      alert(response.data.message);
      setPasswordReset(response.data);
      setError(false);
      navigate("/success");
    } catch (error) {
      setError(true);
      reset();
    }
  };

  console.log({ ...register("password") });
  return (
    <div className="verify_container">
      <Onboarding />
      <div className="new_password_head_content">
        <div className="logo_container">
          <Logo />
        </div>
        <div className="verify_body_content">
          <AuthenticationMainText
            Title={"Create New Password?"}
            Body={"Please enter a password different from your old password"}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            {error && (
              <span className="invalid-token">
                Network Error ! Please try again.
              </span>
            )}
            <div className="form_control_container">
              <div className="form-control">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter answer"
                  name="password"
                  className="password-field"
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message:
                        "Password must contain at-least 6 characters including numbers",
                    },
                  })}
                />
                {errors.password && (
                  <p className="errorMsg">{errors.password.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="form-label" htmlFor="password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Enter answer"
                  name="confirmpassword"
                  className="password-field"
                  {...register("confirmpassword", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message:
                        "Password must contain at-least 6 characters including numbers",
                    },
                    validate: (value) =>
                      value === password.current ||
                      "Password and confirm password should be same",
                  })}
                />
                {errors.confirmpassword && (
                  <p className="errorMsg">{errors.confirmpassword.message}</p>
                )}
              </div>
            </div>

            <button className="verify_btn">
              {isSubmitting ? (
                <i className="fa fa-circle-o-notch fa-spin"></i>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateNewPassword;
