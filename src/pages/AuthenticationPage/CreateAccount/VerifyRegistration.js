import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthenticationMainText from "../../../components/AuthenticationMainText";
import Logo from "../../../components/Logo";
import Onboarding from "../../../components/Onboarding";

const VerifyRegistration = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleVerify = (data) => {
    const isAllFilled = Object.values(data.otp).every((digit) => digit !== "");
    if (isAllFilled) {
      navigate("/next-page");
    }
  };

  return (
    <div className="createAccount_parentContainer">
      <Onboarding />
      <div className="createAccountContainer">
        <div className="loanwiselogo-container">
          <Logo />
        </div>
        <div className="formInputContainerVerify">
          <AuthenticationMainText
            Title="Verify Email Address"
            Body="Thank you for signing up, please enter the verification code we sent to your email address @johndoe@gmail.com"
          />
          <form onSubmit={handleSubmit(handleVerify)}>
            <div className="verifyInputContainer">
              <div className="verifyInput">
                <input
                  type="text"
                  maxLength={1}
                  {...register("otp.0", { required: true, pattern: /^\d$/ })}
                  className={
                    errors.otp && errors.otp[0] ? "emptyBoxHighlight" : ""
                  }
                />
                <input
                  type="text"
                  maxLength={1}
                  {...register("otp.1", { required: true, pattern: /^\d$/ })}
                  className={
                    errors.otp && errors.otp[1] ? "emptyBoxHighlight" : ""
                  }
                />
                <input
                  type="text"
                  maxLength={1}
                  {...register("otp.2", { required: true, pattern: /^\d$/ })}
                  className={
                    errors.otp && errors.otp[2] ? "emptyBoxHighlight" : ""
                  }
                />
                <input
                  type="text"
                  maxLength={1}
                  {...register("otp.3", { required: true, pattern: /^\d$/ })}
                  className={
                    errors.otp && errors.otp[3] ? "emptyBoxHighlight" : ""
                  }
                />
              </div>
              {errors.otp && errors.otp.length > 0 && (
                <div className="signUpErrorMsg">
                  Please fill all the boxes before proceeding
                </div>
              )}
            </div>
            <button className="createAccountBtn" type="submit">
              Verify
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyRegistration;
