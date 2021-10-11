import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-around;
`;

const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #F2F2F2;
`;

const FooterLinks = styled.div`
  display: flex;
`;

export const Footer = () => {

  return (
    <Wrapper>
      <Content>
        <img src="/" alt="logo"/>
        <FooterLinks>
          <div>
            <p>About us</p>
            <ul>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Our story</li>
              <li>Customer Stories</li>
            </ul>
          </div>
          <div>
            <p>Products</p>
            <ul>
              <li>Vacation / Holiday</li>
              <li>Student / Scholar</li>
              <li>Mission</li>
              <li>Marine Captain / Crew</li>
              <li>Employer / Business Travel</li>
            </ul>
          </div>
          <div>
            <p>Members</p>
            <ul>
              <li>Forms Library</li>
              <li>Find a Doctor</li>
              <li>Renew Policy</li>
              <li>Claims Center</li>
            </ul>
          </div>
        </FooterLinks>
      </Content>
    </Wrapper>
  )
}