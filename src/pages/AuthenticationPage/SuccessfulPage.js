import React from "react";
import Logo from "../../components/Logo";
import "../../styles/Successfulpage.css";
import wave from "../../assets/Screenshot.png";
import eclipse from "../../assets/Ellipse 769.svg";
import check from "../../assets/checked.svg";

const SuccessfulPage = () => {
  return (
    <div className="Successful-page-container">
      <div className="success-logo-container">
        <div className="logo-container">
          <Logo />
        </div>
      </div>

      <div className="success-message">
        <div className="image-container">
          <img className="Eclipse1" src={eclipse} alt="Eclipse" />
          <img className="checkmark" src={check} alt="check-mark" />
        </div>
        <h3 className="Congrats">Congratulations!!!</h3>
        <p>
          You are set to explore <span>LoanWise</span> to make safe and easy
          credit decisions
        </p>
      </div>
      <div className="Success-btn-container">
        <button className="successful-btn">Continue</button>
      </div>
      <div className="bottom-image">
        <img className="wave" src={wave} alt="wave" />
      </div>
    </div>
  );
};

export default SuccessfulPage;
