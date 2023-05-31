import React, { useRef } from "react";
import Logo from "../../components/Logo";
import { useForm } from "react-hook-form";
import AuthenticationMainText from "../../components/AuthenticationMainText";
import "../../styles/Auth.css";
import Onboarding from "../../components/Onboarding";

function CreateNewPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (password, confirmpassword) => {
    window.location.href = "/success";
    console.log(password, confirmpassword);
    reset();
  };

  console.log({ ...register("password") });
  return (
    <div className="verify_container">
      <Onboarding />
      <div className="new_password_head_content">
        <div className="logo_container">
          <Logo />
        </div>
        <div className="auth_text">
          <AuthenticationMainText
            Title={"Create New Password?"}
            Body={"Please enter a password different from your old password"}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <button className="verify_btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNewPassword;
