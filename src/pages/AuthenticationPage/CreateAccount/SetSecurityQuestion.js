import React from "react";
import { AuthenticationMainText } from "../../../components/AuthenticationMainText";

const SetSecurityQuestion = () => {
  return (
    <div>
      <div></div>
      <div>
        <AuthenticationMainText
          Title="Set Security Question"
          Body="To keep your account secured, create 2 security questions"
        />
      </div>
    </div>
  );
};

export default SetSecurityQuestion;
