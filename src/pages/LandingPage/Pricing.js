import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TextHeader from "../../components/TextHeader";
import PriceCard from "../../components/PriceCard";
import Faqs from "../../components/Faqs";
import UseLoanWise from "../../components/UseLoanwise";
import Newsletter from "../../components/Newsletter";

const Pricing = () => {
  return (
    <>
      <NavBar />
      <div className="pricing">
        <div className="pricing-card-text-container">
          <TextHeader
            title="Choose your plan"
            description="Choose the pricing plan that works best for you, whether you’re looking for casual transactions or flexible customisations "
            linkLabel="Learn More in FAQ's"
          />
          <div className="pricing-row align-center">
            <PriceCard
              title="Free"
              description="The basics for individuals and organisations"
              price="0"
              priceLabel="per year"
              priceLabel2="forever"
              outlineButtonLabel="Join for free"
              points={[
                "Access core features, including predictive analytics and customizable loan criteria.",
                "Real-time default alerts for prompt action by financial institutions.",
                "Historical loan performance analysis to help predict future defaults.",
                "Compliance with local and federal regulations for loan applications.",
                "Risk scoring prioritizes high-risk loans and minimizes default risk.",
                "Data integration with credit bureaus and financial institutions for borrower history.",
                "Affordable pricing for small financial institutions.",
              ]}
            />
            <PriceCard
              title="Premium"
              description="Advanced collaboration for individuals and organisations"
              price="30"
              oldPrice="15"
              active={true}
              priceLabel="per year forever"
              priceLabel2="for the first 12months*"
              fillButtonLabel="Get Started Premium"
              points={[
                "Basic Plan benefits plus fraud detection and financial behavioral analysis.",
                "Analyze borrower's social media for deeper financial insights.",
                "Customizable dashboards for a comprehensive lending view and informed decisions.",
                "Advanced reporting capabilities for valuable lending insights.",
                "Dedicated support and training for optimal app usage.",
                "Unlimited users for scalable lending as businesses grow.",
                "Competitive pricing with exceptional value for financial institutions.",
              ]}
            />
            <PriceCard
              title="Enterprise"
              description="Security, compliance and flexible deployment"
              oldPrice="252"
              price="231"
              priceLabel="per year forever"
              priceLabel2="for the first 12months*"
              fillButtonLabelLabel="Join for free"
              hasTwoButton={true}
              firstButtonLabel="Start a free trial"
              lastButtonLabel="Contact Sales"
              points={[
                "Premium Plan benefit plus customized risk models and white-labeling. ",
                "Tailored risk models meet specific needs of financial institutions. ",
                "White-labeling enables branding of the app as their own. ",
                "Custom integrations with third-party systems provide seamless experience.",
                " Advanced security features ensure safety of sensitive borrower data.",
                "Flexible pricing options for tailored needs of financial institutions.",
                "Dedicated account management for personalized support.",
              ]}
            />
          </div>
        </div>
        <UseLoanWise />
        <Faqs />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Pricing;
