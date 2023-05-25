import React from "react";
import useVerificationHook from "./lib/useVerificationHook";
import AuthenticationImage from "../../components/AuthenticationImage2";
import "../../styles/Auth.css";
import Logo from "../../components/Logo";
import AuthenticationMainText from "../../components/AuthenticationMainText";

const VerifyCode = () => {
  const { code, inputStates, inputClass, handleChange, handleKeyDown } =
    useVerificationHook(4);
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
              <p className="hide">
                {code ? code : "Fill up the boxes to see the codes here"}
              </p>
            </div>
            <div className="verify_btn_container">
              <button className="verify_btn">Verify</button>
              <p className="no_code">Didn’t get OTP? Resend in 60s</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyCode;
