import React, { useEffect, useState } from "react";
import useVerificationHook from "./lib/useVerificationHook";
import "../../styles/Auth.css";
import Logo from "../../assets/Vector.svg";
import AuthenticationMainText from "../../components/AuthenticationMainText";
import { useNavigate } from "react-router-dom";
import Onboarding from "../../components/Onboarding";
import axios from "axios";

const VerifyCode = () => {
  const [seconds, setSeconds] = useState(60);
  const [countdownFinished, setCountdownFinished] = useState(false);
  const { inputStates, inputClass, handleChange, handleKeyDown } =
    useVerificationHook(4);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let interValId = null;

    if (seconds === 0) {
      setCountdownFinished(true);
      clearInterval(interValId);
    } else {
      interValId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    return () => clearInterval(interValId);
  }, [seconds]);

  const resendCode = () => {
    setSeconds(60);
    setCountdownFinished(false);
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
  const displayEmail = localStorage.getItem("resetEmail");
  const Body = `Please enter the verification code we sent to your registered email address@ ${displayEmail}`;
  return (
    <>
      <div className="verify_container">
        <Onboarding />
        <div className="verify_head_content">
          <div className="logo_container">
            <img src={Logo} alt="Loanwise Logo" class="Logo-loanwise2" />
          </div>
          <div className="verify_body_content formInputContainerVerify ">
            <AuthenticationMainText
              Title={"Verify Email Address"}
              Body={Body}
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
            Didn't get an OTP?{" "}
            {countdownFinished ? (
              <span onClick={resendCode} className="resend_OTP">
                Resend
              </span>
            ) : (
              <span> Resend in {seconds}s </span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default VerifyCode;
