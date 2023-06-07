import React from 'react'
import AuthImage from "../assets/authImg.svg";

const Onboarding = () => {
  return (
    <div className="onboardingImg">
      <img
        src={AuthImage}
        alt="loan analysis graph"
        className="onboardingGraph"
      />
      <div className='onboardingTextContainer'>
        <span className="safe_easy">Make safe and easy decisions</span>
        <span className="insight_click">
          Get insight for credit decision with an in-depth analysis in just one
          click
        </span>
      </div>
    </div>
  );
}

export default Onboarding