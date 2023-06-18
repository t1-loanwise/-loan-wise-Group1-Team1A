import React from "react";
import Logo from "../../components/Logo";
import "../../styles/Successfulpage.css";
import wave from "../../assets/Group 8038.svg";
import eclipse from "../../assets/Ellipse 769.svg";
import check from "../../assets/checked.svg";
import { Link } from "react-router-dom";

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
        <Link to="/login">
          <button className="successful-btn">Continue</button>
        </Link>
      </div>
      <div className="bottom-image">
        <img className="wave" src={wave} alt="wave" />
      </div>
    </div>
  );
};

export default SuccessfulPage;
