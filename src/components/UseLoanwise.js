import React from "react";
import Card1 from "./Card1";
import WireframeAvatar from "../assets/Wireframe Avatar.svg";
import WireframeAvatar1 from "../assets/Wireframe Avatar (1).svg";
import WireframeAvatar2 from "../assets/Wireframe Avatar (2).svg";
import WireframeAvatar3 from "../assets/Wireframe Avatar (3).svg";
import WireframeAvatar4 from "../assets/Wireframe Avatar (4).svg";
import WireframeAvatar5 from "../assets/Wireframe Avatar (5).svg";

const UseLoanwise = () => {
  return (
    <div className="loanwise_card_container">
      <h3 className="loanwise_card_container_heading">Who Can Use Loanwise</h3>
      <p className="loanwise_card_container_text">
        Our Loan Default Prediction App is designed to help various types of
        financial institutions streamline their lending process and reduce the
        risk of loan defaults. Whether you're a small credit union or a large
        financial institution, our Loan Default Prediction App can help you make
        more informed lending decisions and minimize the risk of loan defaults.
      </p>
      <div className="card1_container">
        <Card1
          text={"WireframeAvatar"}
          body={
            "Our app makes the loan application review process more efficient and accurate, enabling loan officers to spend less time on paperwork and more time interacting with clients."
          }
          link={WireframeAvatar}
          title={"Loan Officers "}
        />
        <Card1
          text={"WireframeAvatar1"}
          body={
            "Our app can help these institutions provide loans to individuals and small businesses in developing countries while minimizing the risk of defaults."
          }
          link={WireframeAvatar1}
          title={"Microfinance Institutions"}
        />
        <Card1
          text={"WireframeAvatar2"}
          body={
            "Our app can help these institutions provide loans to individuals and small businesses in developing countries while minimizing the risk of defaults."
          }
          link={WireframeAvatar2}
          title={"Peer-to-Peer Lenders"}
        />
        <Card1
          text={"WireframeAvatar3"}
          body={
            "Our app provides underwriters with the data they need to assess loan applications and make informed lending decisions, leading to reduced risk and increased profitability."
          }
          link={WireframeAvatar3}
          title={"Underwriters "}
        />
        <Card1
          text={"WireframeAvatar4"}
          body={
            "Our app is a valuable tool for financial institutions of all sizes, providing an easy-to-use platform for streamlining the lending process and minimizing risk."
          }
          link={WireframeAvatar4}
          title={"Financial Institutions"}
        />
        <Card1
          text={"WireframeAvatar5"}
          body={
            "Our app helps banks and credit unions reduce the risk of loan defaults and make more informed lending decisions, leading to increased profitability."
          }
          link={WireframeAvatar5}
          title={"Banks and Credit Unions"}
        />
      </div>
    </div>
  );
};

export default UseLoanwise;
