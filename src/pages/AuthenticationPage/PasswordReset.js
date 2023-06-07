import React from "react";
import Logo from "../../components/Logo";
import { useForm } from "react-hook-form";
import AuthenticationMainText from "../../components/AuthenticationMainText";
import "../../styles/Auth.css";
import Onboarding from "../../components/Onboarding";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/verifyEmail");
    console.log(data);
    reset();
  };

  console.log({ ...register("email") });
  return (
    <div className="verify_container">
      <Onboarding />
      <div className="reset_head_content">
        <div className="logo_container">
          <Logo />
        </div>
          <AuthenticationMainText
            Title={"Forgot Password?"}
            Body={"We’ve got you, please enter your registered email address"}
          />
        <form onSubmit={handleSubmit(onSubmit)}>
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
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          </div>
          <button className="verify_btn">Proceed</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
