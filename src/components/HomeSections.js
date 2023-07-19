import React from "react";
import { Link } from "react-router-dom";
import Imagehero from "../assets/Imagehero.svg";
import AboutImage from "../assets/AboutImage.svg";
import { img } from "react-lazy-load-image-component";
import SpecialFeaturesOne from "../assets/SpecialFeature.svg";
import SpecialFeature2 from "../assets/SpecialFeature2.svg";
import Checklist from "./Checklist";
import Clock from "../assets/History.svg";
import Arrow from "../assets/Arrow.svg";
import Arrow2 from "../assets/Arrow2.svg";
import Button1 from "./Button1";
import HomeHeader from "./HomeHeader";
import "../styles/Home.css";
import { IconContext } from "react-icons";
import { BsArrowRightShort } from "react-icons/bs";
import icon1 from "../assets/Iconfeature1.svg";
import icon2 from "../assets/Iconfeature2.svg";
import icon3 from "../assets/Iconfeature3.svg";
import icon4 from "../assets/Iconfeature4.svg";
import arrow from "../assets/icons8-arrow-right-50.png";

const HomeSections = ({ link, text }) => {
  return (
    <div>
      <div className="homepage_container">
        <div className="hero-section">
          <div className="hero-text">
            <div id="history">
              <img id="clock" src={Clock} />
              <p>Watch Our History</p>
            </div>
            <HomeHeader
              header={
                "Transform lending          with accurate risk prediction"
              }
              text={
                "Our app accurately predicts default risk for borrowers, helping financial institutions make informed lending decisions and minimize the impact of defaults"
              }
            />
            <div id="buttons">
              <Link to="/register">
                <Button1 text={"Get Started"} />
              </Link>
              <Link to="/about" className="learnMoreText">
                <button className="learnMore">
                  <span>Learn More</span>
                  <img src={arrow} className="learn-img"/>
                </button>
              </Link>
            </div>
          </div>
          <img
            src={Imagehero}
            alt="hero section image"
            className="home-image"
          />
        </div>
        <div className="about-uss">
          <div className="hero-text">
            <HomeHeader
              header={" Revolutionising lending with predictive analytics."}
              text={
                "At Loan Default Prediction, we're passionate about revolutionising the lending industry by providing innovative technology that helps financial institutions make more informed lending decisions and minimise the risk of loan defaults."
              }
            />
            <Link to="/register">
              <Button1 id="about-button" text={"Get Started"} />
            </Link>
          </div>
          <img
            src={AboutImage}
            alt="about us section image"
            className="section-image"
          />
        </div>
        <div className="discover-section">
          <div className="discover-text">
            <HomeHeader
              header={
                "Discover how our innovative loan risk assessment tool can benefit your institution."
              }
              text={
                "Our goal is to help financial institutions make more informed lending decisions and reduce the risk of loan default. We developed the Loan Default Prediction App to provide an innovative solution that simplifies the loan application process, reduces the time it takes to process loan applications, and improves the accuracy of loan decisions."
              }
            />
          </div>
          <img src={Arrow} alt="arrow" className="arrow-image" />
        </div>
        <div className="feature-section">
          <div className="amazing-features">
            <span className="amazing-text">
              Check out <br />
              our amazing features.
            </span>
            <img src={Arrow2} alt="arrow-img" className="featureArrow-image" />
          </div>
          <div className="featuresCard-container">
            <div className="featureCard-container">
              <div className="featureIcon">
                <img
                  src={icon1}
                  alt="featuresIcon"
                  className="featureIconImg"
                />
              </div>
              <span className="featureText">
                Predictive analytics for accurate risk assessment
              </span>
            </div>
            <div className="featureCard-container">
              <div className="featureIcon">
                <img
                  src={icon2}
                  alt="featuresIcon"
                  className="featureIconImg"
                />
              </div>
              <span className="featureText">
                Compliance management for regulatory adherence
              </span>
            </div>
            <div className="featureCard-container">
              <div className="featureIcon">
                <img
                  src={icon3}
                  alt="featuresIcon"
                  className="featureIconImg"
                />
              </div>
              <span className="featureText">
                Historical loan performance analysis for future defaults
              </span>
            </div>
            <div className="featureCard-container">
              <div className="featureIcon">
                <img
                  src={icon4}
                  alt="featuresIcon"
                  className="featureIconImg"
                />
              </div>
              <span className="featureText">
                Data integration for comprehensive financial history.
              </span>
            </div>
          </div>
        </div>
        <div className="special-one">
          <img
            src={SpecialFeaturesOne}
            alt="special features one image"
            className="specialFeature-image"
          />
          <div className="home-right">
            <HomeHeader
              header={"Improve teamwork with our in-app messaging feature."}
              text={
                "Our messaging feature allows teammates to communicate seamlessly and efficiently within the Loan Default Prediction App. With the ability to discuss loan applications, share information, and ask questions in real-time, our messaging feature helps teams collaborate more effectively and make better lending decisions"
              }
            />
            <div className="checklist-container">
              <Checklist text={"Better team collaboration"} />
              <Checklist text={"Streamlined communication"} />
              <Checklist text={"Faster loan application processing"} />
            </div>
          </div>
        </div>
        <div className="special-two">
          <div className="home-left">
            <HomeHeader
              header={"Identify loan defaulters with precision."}
              text={
                "Our innovative financial behavioral analysis feature goes beyond traditional credit checks to help financial institutions more accurately predict loan defaults. By analyzing a borrower's financial habits and behavior, our app provides a more comprehensive view of their creditworthiness, allowing lenders to make better-informed lending decisions."
              }
            />
            <div className="checklist-container">
              <Checklist text={"Enhance loan approval accuracy."} />
              <Checklist text={"Reduce the risk of defaults."} />
              <Checklist text={"Streamline lending decisions."} />
            </div>
          </div>
          <img
            src={SpecialFeature2}
            alt="special features two image"
            className="loanDefault-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSections;
