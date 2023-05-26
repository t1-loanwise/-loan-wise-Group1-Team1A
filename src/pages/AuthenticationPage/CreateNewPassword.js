import React from "react";
import Logo from "../../components/Logo";
import { useForm } from "react-hook-form";
import AuthenticationMainText from "../../components/AuthenticationMainText";
import AuthenticationImage from "../../components/AuthenticationImage2";
import "../../styles/Auth.css";

function CreateNewPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (password) => {
    console.log(password);
    reset();
  };

  console.log({ ...register("password") });
  return (
    <div className="verify_container">
      <AuthenticationImage />
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
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password should be at-least 6 characters.",
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
                name="password"
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
          </div>
          <button className="verify_btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNewPassword;
