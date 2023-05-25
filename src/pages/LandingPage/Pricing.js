import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import TextHeader from "../../components/TextHeader";
import PriceCard from "../../components/PriceCard";
import OptionCard from "../../components/OptionCard";
import Faqs from "../../components/Faqs";
import hand from "../../assets/icons/handWithCurrency.png";
import bank from "../../assets/icons/bank.png";
import lender from "../../assets/icons/lender.png";
import underwriters from "../../assets/icons/underwriters.png";
import business from "../../assets/icons/business.png";
import notes from "../../assets/icons/notes.png";

const Pricing = () => {
  return (
    <>
      <NavBar />
      <div className="pricing">
        <TextHeader
          title="Choose your plan"
          description="Choose the pricing plan that works best for you, whether you’re looking for casual transactions or flexible customisations "
          urlText="Learn More in FAQ’s"
          url="#faq"
        />
        <div className="row">
          <PriceCard
            title="Free"
            description="Basics for Individual and Organisations"
            price="0"
            priceLabel="per year forever"
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
            priceLabel="per year forever\n for the first 12months"
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
            description="Security, compliance \n and flexible deployment"
            oldPrice="252"
            price="231"
            priceLabel="per year forever\n for the first 12months"
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
        <TextHeader
          title="Who Can Use Loanwise"
          description="Our Loan Default Prediction App is designed to help various types of financial institutions streamline their lending process and reduce the risk of loan defaults. Whether you're a small credit union or a large financial institution, our Loan Default Prediction App can help you make more informed lending decisions and minimize the risk of loan defaults."
        />
        <div className="row">
          <OptionCard
            image={hand}
            title="Loan Officers"
            description="Our app makes the loan application review process more efficient and accurate, enabling loan officers to spend less time on paperwork and more time interacting with clients."
          />
          <OptionCard
          image={bank}
            title="Microfinance Institutions"
            description=" Our app can help these institutions provide loans to individuals and small businesses in developing countries while minimizing the risk of defaults."
          />
          <OptionCard
            image={lender}
            title="Peer-to-Peer Lenders"
            description="Our app can help these lenders minimize the risk of loan defaults by analyzing borrower data and providing a risk score for each loan application."
          />
         
        </div>
        <div className="row">
        <OptionCard
        image={underwriters}
        title="Underwriters"
        description="Our app provides underwriters with the data they need to assess loan applications and make informed lending decisions, leading to reduced risk and increased profitability."
      />
      <OptionCard
      image={business}
        title="Financial Institutions"
        description=" Our app is a valuable tool for financial institutions of all sizes, providing an easy-to-use platform for streamlining the lending process and minimizing risk."
      />
      <OptionCard
      image={notes}
        title="Banks and Credit Unions"
        description="Our app helps banks and credit unions reduce the risk of loan defaults and make more informed lending decisions, leading to increased profitability."
      />
        </div>
        <TextHeader
          title="Frequently asked questions"
          description="Choose the pricing plan that works best for you, whether you’re looking for casual transactions or flexible customisations "
        />
      </div>
      <Faqs />
      <Footer />
    </>
  );
};

export default Pricing;
