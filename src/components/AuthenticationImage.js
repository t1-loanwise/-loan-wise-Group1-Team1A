import React from "react";
import AuthImage from "../assets/Sign Up Design.png";
import "../styles/Auth.css";

const AuthenticationImage = () => {
  return (
    <>
      <img src={AuthImage} alt="AuthImage" className="auth_image" />
    </>
  );
};

export default AuthenticationImage;
