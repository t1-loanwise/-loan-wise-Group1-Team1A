import React from "react";
import Card2 from "../../components/Card2";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Newsletter from "../../components/Newsletter";
import WireframeA from "../../assets/WireframeA.svg";
import WireframeB from "../../assets/WireframeB.svg";
import WireframeC from "../../assets/WireframeC.svg";
import WireframeD from "../../assets/WireframeD.svg";
import WireframeE from "../../assets/WireframeE.svg";
import WireframeF from "../../assets/WireframeF.svg";
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
              body={"Team Lead."}
              link={WireframeA}
              title={"Mofifoluwa Osakuni "}
            />
            <Card2
              text={"WireframeB"}
              body={"Senior Product Designer"}
              link={WireframeB}
              title={"Ojasanya Fatimoh"}
            />
            <Card2
              text={"WireframeC"}
              body={"Senior Product Designer."}
              link={WireframeC}
              title={"Oluwadamilola Abiodun "}
            />
            <Card2
              text={"WireframeD"}
              body={"Product Designer."}
              link={WireframeD}
              title={"Nnamdi Kent "}
            />
            <Card2
              text={"WireframeE"}
              body={"Product Designer"}
              link={WireframeE}
              title={"Balogun  Mariam"}
            />
            <Card2
              text={"WireframeF"}
              body={"Product Designer"}
              link={WireframeF}
              title={"Pelumi Oyediji "}
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
