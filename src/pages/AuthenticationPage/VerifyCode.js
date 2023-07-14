import React, { useEffect, useState } from "react";
import useVerificationHook from "./lib/useVerificationHook";
import "../../styles/Auth.css";
import Logo from "../../components/Logo";
import AuthenticationMainText from "../../components/AuthenticationMainText";
import { useNavigate } from "react-router-dom";
import Onboarding from "../../components/Onboarding";
import axios from "axios";

const VerifyCode = () => {
  const [seconds, setSeconds] = useState(60);
  const { inputStates, inputClass, handleChange, handleKeyDown } =
    useVerificationHook(4);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendCode = () => {
    setSeconds(60);
  };

  const routeHandler = async (e) => {
    e.preventDefault();
    const isAnyInputEmpty = inputStates.some((state) => state.digit === "");
    const resetToken = inputStates.map((state) => state.digit).join("");
    if (isAnyInputEmpty) {
      setErrorMessage("Please fill all the boxes before proceeding");
      return;
    } else {
      try {
        setIsSubmitting(true);
        const response = await axios.post(
          `https://loanwise.onrender.com/api/recovery-account`,
          {
            email: localStorage.getItem("resetEmail"),
            recoveryCode: resetToken,
          }
        );
        alert(response.data.message);
        setToken(response.data);
        setIsSubmitting(false);
        setError(false);
        localStorage.setItem("resetToken", resetToken);
        navigate("/newPassword");
      } catch (error) {
        setError(true);
      }
    }
  };

  return (
    <>
      <div className="verify_container">
        <Onboarding />
        <div className="verify_head_content">
          <div className="logo_container">
            <Logo />
          </div>
          <div className="verify_body_content">
            <AuthenticationMainText
              Title={"Verify Email Address"}
              Body={
                "Please enter the verification code we sent to your registered email address @johndoe@gmail.com"
              }
            />
            <form onSubmit={routeHandler}>
              <div className="code-error-container">
                {error && (
                  <span className="invalid-token">Invalid Token !!!</span>
                )}
                <div className="code-digit-container">
                  {inputStates.map((state, ii) => {
                    return (
                      <input
                        type="number"
                        value={state.digit}
                        className={inputClass}
                        onChange={(e) => handleChange(e, ii)}
                        onKeyDown={handleKeyDown}
                      />
                    );
                  })}
                </div>
                {errorMessage && <p className="errorMsg">{errorMessage}</p>}
              </div>
              <button className="verify_btn">
                {isSubmitting ? (
                  <i className="fa fa-circle-o-notch fa-spin"></i>
                ) : (
                  "Verify"
                )}
              </button>
            </form>
          </div>
          <p className="no_code">
            Didn’t get OTP?{" "}
            <button className="resend_btn" onClick={resendCode}>
              Resend
            </button>{" "}
            in {seconds}s
          </p>
        </div>
      </div>
    </>
  );
};

export default VerifyCode;
