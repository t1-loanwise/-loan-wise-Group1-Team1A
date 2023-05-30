import React from "react";
import Logo from "../../components/Logo";
import "../../styles/Successfulpage.css";
import Check from "../../assets/check.svg";
import Eclipse1 from "../../assets/Ellipse 769.svg";
import Wave from "../../assets/wave-Vector 1.svg"

const SuccessfulPage = () => {
  return (
    <div className="Successful-page-container">
      <div className="success-logo-container">
        <div className="logo-container">
          <Logo />
        </div>
      </div>
      <div className="image-container">
        <img className="Eclipse1" src={Eclipse1} alt="Eclipse"/>
        <img className="checkmark" src={Check} alt="check-mark"/>
      </div>

      <div className="success-message" >
        
        <h3 className="Congrats">Congratulations!!!</h3>
        <p>You are set to explore <span>LoanWise</span> to make safe and easy credit decisions</p>
        
      </div>
      <div className="Success-btn-container">
        <button className="successful-btn">Continue</button>
        </div>
       {/* <div className="bottom-image">
          <img className="wave" src={Wave} alt="wave"/>
  </div> */}

    </div>
    
  );
};

export default SuccessfulPage;
