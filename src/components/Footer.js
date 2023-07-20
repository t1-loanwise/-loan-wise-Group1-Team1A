import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets//Vector.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";

const FooterContainer = styled.footer`
  padding: 0px 5.5% 32px;
  display: flex;
  flex-direction: column;
  gap: 2.7em;
  @media (max-width: 768px) {
    gap: 1.5em;
  }
`;

const DivContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  border-bottom: 1px solid #ccd1d2;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.5em;
  }
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 25%;
  color: #00151a;
  font-size: 1em;
  @media (max-width: 768px) {
   width: 90%;
   justify-content: center;
  }
`;
const Div2 = styled.div`
  display: flex;
  gap: 5em;
  color: #00191f;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    row-gap: 3em;
    justify-content: space-between;
    width: 100%;
  }
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3em;
  color: #2b3f44;
`;
const Div2A = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4em;
`;
const Div2B = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3em;
`;
const Div2C = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3em;
`;

const Div2D = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const LogoImage = styled.img`
  width: 75%;
  @media (max-width: 768px) {
    width: 30%;
  }
`;
const LoanText = styled.span`
  font-size: 1em;
`;
const StayInTouch = styled.span`
  font-size: 1.5em;
`;
const EmailForm = styled.form`
  width: 100%;
`;
const EmailInput = styled.input`
  width: 100%;
  padding: 8px 0 8px 5px;
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  font-size: 1em;
  &:focus {
    outline: 1px solid #007e99;
  }
`;
const ContinueBtn = styled.button`
  background: #007e99;
  padding: 20px 0;
  width: 100%;
  border: 0;
  font-size: 1em;
  border-radius: 5px;
  color: #ffffff;
  &:hover {
    background-color: #006980;
    transition: ease-in-out 0.3s;
  }
  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Resources = styled.span`
  font-size: 1.25em;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;
const Company = styled.span`
  font-size: 1.25em;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;
const Contact = styled.span`
  font-size: 1.25em;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const ResourcesList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 1.3em;

`;
const CompanyList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 1.3em;
`;

const List = styled(Link)`
  text-decoration: none;
  color: #00191f;
  font-size: 1.15em;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;


const PhoneNumbers = styled.span`
  display: flex;
  flex-direction: column;
`;
const SocialsContainer = styled.div`
  display: flex;
  gap: 0.5em;
`;
const SocialsImage = styled.img`
  width: 100%;
`;

const Copyright = styled.span`
  font-size: 1.25em;
  @media (max-width: 768px) {
    font-size: 1em;
    text-align: center;
  }
`;


const Footer = () => {

  return (
    <>
      <FooterContainer>
        <DivContainers>
          <Div1>
            <Link to="/">
              <LogoImage src={Logo} alt="Loanwise Logo" />
            </Link>
            <LoanText>
              With our app, you can access a suite of advanced analytics and
              data visualization tools to better understand loan performance and
              identify potential areas for improvement.
            </LoanText>
            <StayInTouch>Stay in Touch</StayInTouch>
            <EmailForm>
              <EmailInput type="email" name="email" placeholder="Your Email" />
            </EmailForm>
            <ContinueBtn>Continue</ContinueBtn>
          </Div1>
          <Div2>
            <Div2A>
              <Resources>RESOURCES</Resources>
              <ResourcesList>
                <li>
                  <List to="/blog">Blog</List>
                </li>
                <li>
                  <List to="/pricing">FAQ</List>
                </li>
                <li>
                  <List>Help center</List>
                </li>
                <li>
                  <List>Contact Us</List>
                </li>
              </ResourcesList>
            </Div2A>
            <Div2B>
              <Company>GENERAL</Company>
              <CompanyList>
                <li>
                  <List to="/about">Users</List>
                </li>
                <li>
                  <List>Admin</List>
                </li>
                <li>
                  <List>Team</List>
                </li>
                <li>
                  <List>Lending</List>
                </li>
              </CompanyList>
            </Div2B>
            <Div2C>
              <Company>COMPANY</Company>
              <CompanyList>
                <li>
                  <List to="/about">About Us</List>
                </li>
                <li>
                  <List>Careers</List>
                </li>
                <li>
                  <List>Privacy Policy</List>
                </li>
                <li>
                  <List>Terms of Use</List>
                </li>
              </CompanyList>
            </Div2C>
            <Div3>
              <Contact>CONTACT</Contact>
              <Div2D>
                <span>loanwise@gmail.com</span>
                <PhoneNumbers>
                  <span>+123-456-789-00</span>
                  <span>+123-456-789-00</span>
                </PhoneNumbers>
                <span>
                  123, Numberone Avenue, <br /> VI, Lagos
                </span>
                <SocialsContainer>
                  <a href="Home.js">
                    <SocialsImage src={linkedin} alt="LinkedIn" />
                  </a>

                  <a href="Home.js">
                    <SocialsImage src={instagram} alt="Instagram" />
                  </a>

                  <a href="Home.js">
                    <SocialsImage src={twitter} alt="Twitter" />
                  </a>
                </SocialsContainer>
              </Div2D>
            </Div3>
          </Div2>
        </DivContainers>
        <Copyright>©2023 Loanwise. All rights reserved</Copyright>
      </FooterContainer>
    </>
  );
};

export default Footer;
