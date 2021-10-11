import React from "react";
import styled from "styled-components";

import {FooterList} from "./FooterList/FooterList";

import logo from '../../assets/logo-dark.png'

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #F2F2F2;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
`;

const Logo = styled.img`
  height: 40px;
  margin: 20px 5px;

  @media only screen and (min-width: 1200px) {
    margin: 40px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const footerLinks = [
  {title: 'About us', links: ['Newsroom', 'Careers', 'Our story', 'Customer Stories']},
  {
    title: 'Products',
    links: ['Vacation / Holiday', 'Student / Scholar', 'Mission', 'Marine Captain / Crew', 'Employer / Business Travel']
  },
  {title: 'Members', links: ['Forms Library', 'Find a Doctor', 'Renew Policy', 'Claims Center']}
]

export const Footer = () => {

  return (
    <Wrapper>
      <Content>
        <Logo src={logo} alt="logo"/>
        <FooterLinks>
          {footerLinks.map(linkList => <FooterList key={linkList.title} linkList={linkList}/>)}
        </FooterLinks>
      </Content>
    </Wrapper>
  )
}