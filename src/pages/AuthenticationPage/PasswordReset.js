import React from "react";
import Logo from "../../components/Logo";
import Button1 from "../../components/Button1";
import { useForm } from "react-hook-form";
import AuthenticationMainText from "../../components/AuthenticationMainText";
import AuthenticationImage from "../../components/AuthenticationImage";
import "../../styles/Auth.css";

const PasswordReset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  console.log({ ...register("email") });
  return (
    <div className="verify_container">
      <AuthenticationImage />
      <div className="verify_head_content">
        <div className="logo_container">
          <Logo />
        </div>
        <div className="auth_text">
          <AuthenticationMainText
            Title={"Forgot Password?"}
            Body={"We’ve got you, please enter your registered email address"}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label style={{ display: "block" }} htmlFor="email">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter answer"
              name="email"
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

          <Button1 text={"Proceed"} />
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
