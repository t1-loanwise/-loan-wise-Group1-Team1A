import React, { useState } from "react";
import useVerificationHook from "./lib/useVerificationHook";
import AuthenticationImage from "../../components/AuthenticationImage2";
import "../../styles/Auth.css";
import Logo from "../../components/Logo";
import AuthenticationMainText from "../../components/AuthenticationMainText";
import { useNavigate } from "react-router-dom";

const VerifyCode = () => {
  const { inputStates, inputClass, handleChange, handleKeyDown } =
    useVerificationHook(4);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const routeHandler = () => {
    const isAnyInputEmpty = inputStates.some((state) => state.digit === "");
    if (isAnyInputEmpty) {
      setErrorMessage("Please fill all the boxes before proceeding");
      return;
    } else navigate("/newpassword");
    setErrorMessage("");
  };

  return (
    <>
      <div className="verify_container">
        <AuthenticationImage />
        <div className="verify_head_content">
          <div className="logo_container">
            <Logo />
          </div>
          <div className="verify_body_content">
            <div className="auth_text">
              <AuthenticationMainText
                Title={"Verify Email Address"}
                Body={
                  "Please enter the verification code we sent to your registered email address @johndoe@gmail.com"
                }
              />
            </div>
            <div>
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
              {errorMessage && <p className="errorMsg">{errorMessage}</p>}
            </div>
            <div className="verify_btn_container">
              <button onClick={routeHandler} className="verify_btn">
                Verify
              </button>
              <p className="no_code">Didn’t get OTP? Resend in 60s</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyCode;
