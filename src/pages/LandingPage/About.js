import React from "react";
import Card2 from "../../components/Card2";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Newsletter from "../../components/Newsletter";
import WireframeA from "../../assets/profilepictures/blessing.JPG";
import WireframeB from "../../assets/profilepictures/muftiat.JPG";
import WireframeC from "../../assets/profilepictures/temi.JPG";
import WireframeD from "../../assets/profilepictures/toyin.JPG";
import WireframeE from "../../assets/profilepictures/mimi.JPG";
import WireframeF from "../../assets/profilepictures/nancy.JPG";
import WireframeG from "../../assets/profilepictures/esther.JPG";
import WireframeH from "../../assets/WireframeC.svg";
import AboutUs from "../../assets/About Us Hero Section.svg";
import Table from "../../assets/Table.svg";
import LoanOverview from "../../assets/Special Feature.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="about_us_container">
        <div className="about_header_container">
          <h2 className="about-header">
            Simplifying lending, reducing loan default risk.
          </h2>
          <p className="about_header_text">
            The Loan Default Prediction App is a company dedicated to
            simplifying the lending process for financial institutions and
            borrowers. Their experienced team understands the complexities and
            challenges involved in lending money, and their goal is to help
            financial institutions reduce the risk of loan default and make more
            informed lending decisions.
          </p>
          <img className="about_us_img" src={AboutUs} alt="avatar" />
        </div>
        <div className="our-vision-container">
          <div className="our-vision-text">
            <h2>Our Vision</h2>
            <p>
              Our vision at Loan Default Prediction App is to revolutionize the
              lending industry by providing financial institutions with
              innovative and data-driven solutions that streamline the lending
              process, reduce the risk of loan default, and ultimately lead to
              increased profitability. We believe that by utilizing advanced
              predictive analytics and staying up-to-date with the latest
              lending technologies and trends, we can provide financial
              institutions with the tools they need to make more informed
              lending decisions and improve the overall customer experience.
            </p>
            <Link to="/register">
              <button className="button3">Get Started</button>
            </Link>
          </div>
          <div className="our-vision-img">
            <img className="loan-analysis" src={Table} alt="avatar" />
          </div>
        </div>
        <div className="our-mision-container">
          <div className="our-mision-img">
            <img className="loan-analysis" src={LoanOverview} alt="avatar" />
          </div>
          <div className="our-mision-text">
            <h2>Our Mission</h2>
            <p>
              Our mission at Loan Default Prediction App is to revolutionize the
              lending industry by providing an innovative solution that
              simplifies and streamlines the loan application process while
              reducing the risk of loan default. We believe in making the
              lending process simpler and more transparent for both financial
              institutions and borrowers. We are committed to leveraging
              data-driven insights to help our clients make more informed
              lending decisions and minimize risk exposure.
            </p>
            <Link to="/register">
              <button className="button3">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="amazing-team_card_container2">
          <h3 className="loanwise_card_container_heading">
            Meet Our Amazing Team
          </h3>
          <p className="loanwise_card_container_text">
            We are proud to introduce the talented individuals who make up the
            Loan Default Prediction App team. Our team is comprised of
            experienced professionals from diverse backgrounds, each bringing
            their unique skills and expertise to our mission of making the
            lending process simpler and more transparent.
          </p>
          <div className="card2_container">
            <Card2
              text={"WireframeA"}
              body={"Front-End Developer"}
              link={WireframeA}
              title={"Blessing Ukanah"}
            />
            <Card2
              text={"WireframeB"}
              body={"Front-End Developer"}
              link={WireframeB}
              title={"Muftiat Bakare"}
            />
            <Card2
              text={"WireframeC"}
              body={"Front-End Developer"}
              link={WireframeC}
              title={"Temidayo Kehinde"}
            />
            <Card2
              text={"WireframeD"}
              body={"Front-End Developer"}
              link={WireframeD}
              title={"Oluwatoyin Bello"}
            />
            <Card2
              text={"WireframeE"}
              body={"Front-End Developer"}
              link={WireframeE}
              title={"Miriam Okpalaeke"}
            />
            <Card2
              text={"WireframeF"}
              body={"Front-End Developer"}
              link={WireframeF}
              title={"Nancy Olatuja"}
            />
            <Card2
              text={"WireframeF"}
              body={"Front-End Developer"}
              link={WireframeG}
              title={"Esther Okon"}
            />
            <Card2
              text={"WireframeF"}
              body={"Front-End Developer"}
              link={WireframeH}
              title={"Eke Ukeni"}
            />
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default About;
