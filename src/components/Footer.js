import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets//Vector.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";

const FooterContainer = styled.footer`
  padding: 0px 5% 32px;
  display: flex;
  flex-direction: column;
  gap: 2.7em;
`;

const NewsLetterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NewsLetter = styled.span`
  font-size: 2.5em;
  font-weight: 400px;
  line-height: 1.4em;
  width: 70%;
  color: #002a33;
`;

const SubscriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const SubscribeBtn = styled.button`
  background: transparent;
  border: 1px solid #006980;
  padding: 20px 26px;
  border-radius: 5px;
  color: #006980;
  &:hover {
    background-color: #007e99;
    color: white;
    border: 1px solid #007e99;
    transition: ease-in-out 0.1s;
  }
`;

const MembershipBtn = styled.button`
  background: #007e99;
  border: 0;
  padding: 20px 26px;
  border-radius: 5px;
  color: #ffffff;
  &:hover {
    background-color: #006980;
    transition: ease-in-out 0.3s;
  }
`;

const DivContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  border-bottom: 1px solid #ccd1d2;
  padding-bottom: 20px;
`;

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 25%;
  color: #00151a;
  font-size: 1em;
`;
const Div2 = styled.div`
  display: flex;
  gap: 5em;
  color: #00191f;
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  color: #2b3f44;
`;
const Div2A = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const Div2B = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const Div2C = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const LogoImage = styled.img`
  width: 100%;
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
`;

const Resources = styled.span`
  font-size: 1.25em;
`;
const Company = styled.span`
  font-size: 1.25em;
`;
const Contact = styled.span`
  font-size: 1.25em;
  padding-bottom: 20px;
`;

const ResourcesList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;
const CompanyList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const List = styled(Link)`
  text-decoration: none;
  color: #00191f;
  font-size: 1.15em;
  &:hover {
    text-decoration: underline;
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
`;


const Footer = () => {

  return (
    <>
      <FooterContainer>
        <NewsLetterContainer>
          <NewsLetter>
            Join Our Newsletter to be up-to-date with our latest news.
          </NewsLetter>
          <SubscriptionContainer>
            <SubscribeBtn>Subscribe</SubscribeBtn>
            <MembershipBtn>Get A Membership</MembershipBtn>
          </SubscriptionContainer>
        </NewsLetterContainer>
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
                  <List>Blog</List>
                </li>
                <li>
                  <List>FAQ</List>
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
              <Company>COMPANY</Company>
              <CompanyList>
                <li>
                  <List>About Us</List>
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
            </Div2B>
            <Div2C>
              <Company>COMPANY</Company>
              <CompanyList>
                <li>
                  <List>About Us</List>
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
          </Div2>
          <Div3>
            <Contact>CONTACT</Contact>
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
          </Div3>
        </DivContainers>
        <Copyright>© 2023Loanwise.All rights reserved</Copyright>
      </FooterContainer>
    </>
  );
};

export default Footer;
