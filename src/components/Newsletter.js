import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from "styled-components";

const NewsLetterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px 5.5% 45px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
    align-items: center;
  }
`;

const NewsLetter = styled.span`
  font-size: 2.3em;
  font-weight: 400px;
  line-height: 1.3em;
  width: 70%;
  color: #002a33;
  @media (max-width: 768px) {
    font-size: 1.5em;
    width: 100%;
    text-align: center;
  }
`;

const SubscriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  @media (max-width: 768px) {
    gap: 0.2em;
  }
`;

const SubscribeBtn = styled.button`
  background: transparent;
  border: 1px solid #006980;
  padding: 20px 0px;
  border-radius: 5px;
  color: #006980;
  font-weight: bold;
  width: 150px;
  &:hover {
    background-color: #007e99;
    color: white;
    border: 1px solid #007e99;
    transition: ease-in-out 0.1s;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.85em;
  }
`;

const MembershipBtn = styled.button`
  background: #007e99;
  border: 1px solid #007e99;
  padding: 20px 0px;
  border-radius: 5px;
  color: #ffffff;
  font-weight: bold;
  width: 150px;
  &:hover {
    background-color: #006980;
    transition: ease-in-out 0.3s;
  }
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.85em;
  }
`;


const Newsletter = () => {
  return (
    <NewsLetterContainer>
      <NewsLetter>
        Join Our Newsletter to be up-to-date with our latest news.
      </NewsLetter>
      <SubscriptionContainer>
          <SubscribeBtn>Subscribe</SubscribeBtn>
        <Link to="/pricing">
        <MembershipBtn>Get A Membership</MembershipBtn>
        </Link>
      </SubscriptionContainer>
    </NewsLetterContainer>
  );
}

export default Newsletter