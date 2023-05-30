import React from "react";
import auth_image from "../assets/Auth_image.svg";
import "../styles/Auth.css";

function AuthCard() {
  return (
    <div className="auth-card-container">
      <img src={auth_image} alt="auth_image" className="auth-card-img" />
      <h3 className="auth-card-header-text">Make safe and easy decisions</h3>
      <p className="auth-card-body-text">
        Get insight for credit decision with an in-depth analysis in just one
        click
      </p>
    </div>
  );
}

export default AuthCard;
