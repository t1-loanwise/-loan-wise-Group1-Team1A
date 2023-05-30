import React, { useState, useRef } from "react";
import  AuthenticationMainText from "../../../components/AuthenticationMainText";
import Logo from "../../../components/Logo";
import Onboarding from "../../../components/Onboarding";

const VerifyRegistration = () => {
 const [otp, setOtp] = useState(["", "", "", ""]);
 const [activeInput, setActiveInput] = useState(0);
 const inputRefs = useRef([]);

 const handleOtpChange = (event, index) => {
  const value = event.target.value;
  if (!isNaN(value) || value === "") {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });
    if (value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  }
 };

const handleKeyDown = (event, index) => {
  if (event.key === "Backspace" && otp[index] === "") {
    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  }
};

 const handleVerify = () => {
   const enteredOtp = otp.join("");
   // Perform verification logic here with enteredOtp
   console.log("Entered OTP:", enteredOtp);
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
          <div className="verifyInputContainer">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(event) => handleOtpChange(event, index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                ref={(ref) => (inputRefs.current[index] = ref)}
                autoFocus={index === activeInput}
              />
            ))}
          </div>
          <button onClick={handleVerify} className="createAccountBtn">
            Verify
          </button>
        </div>
        <span className="no_OTP">Didn't get an OTP? Resend in 60s</span>
      </div>
    </div>
  );
};

export default VerifyRegistration;
