import React from "react";
import { AuthenticationMainText } from "../../../components/AuthenticationMainText";
import AuthenticationImage from "../../../components/AuthenticationImage"
import Logo from "../../../components/Logo"

const SetSecurityQuestion = () => {
  return (
    <div>
      <AuthenticationImage/>
      <div>
        <Logo/>
        <AuthenticationMainText
          Title="Set Security Question"
          Body="To keep your account secured, create 2 security questions"
        />
      </div>
    </div>
  );
};

export default SetSecurityQuestion;
