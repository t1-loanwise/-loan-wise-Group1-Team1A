import React from 'react'
import { styled } from "styled-components";

const NewsLetterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5% 45px;
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


const Newsletter = () => {
  return (
    <NewsLetterContainer>
      <NewsLetter>
        Join Our Newsletter to be up-to-date with our latest news.
      </NewsLetter>
      <SubscriptionContainer>
        <SubscribeBtn>Subscribe</SubscribeBtn>
        <MembershipBtn>Get A Membership</MembershipBtn>
      </SubscriptionContainer>
    </NewsLetterContainer>
  );
}

export default Newsletter