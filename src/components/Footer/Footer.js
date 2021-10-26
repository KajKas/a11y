import React from "react";
import styled from "styled-components";

import {FooterList} from "./FooterList/FooterList";

import logo from '../../assets/logo.png'

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #90AA86;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
`;

const Logo = styled.img`
  height: 120px;
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
  {
    sectionTitle: 'About us',
    links: [
      {linkTitle: 'Newsroom', linkUrl: 'newsroom'},
      {linkTitle: 'Careers', linkUrl: 'careers'},
      {linkTitle: 'Our story', linkUrl: 'our-story'},
      {linkTitle: 'Customer Stories', linkUrl: 'customer-stories'},
    ]
  },
  {
    sectionTitle: 'Products',
    links: [
      {linkTitle: 'Vacation / Holiday', linkUrl: 'vacation-holiday'},
      {linkTitle: 'Student / Scholar', linkUrl: 'student-scholar'},
      {linkTitle: 'Mission', linkUrl: 'mission'},
      {linkTitle: 'Marine Captain / Crew', linkUrl: 'captain-crew'},
      {linkTitle: 'Employer / Business Travel', linkUrl: 'employer-business'},
    ]
  },
  {
    sectionTitle: 'Members',
    links: [
      {linkTitle: 'Forms Library', linkUrl: 'forms-library'},
      {linkTitle: 'Find a Doctor', linkUrl: 'find-doctor'},
      {linkTitle: 'Renew Policy', linkUrl: 'renew-policy'},
      {linkTitle: 'Claims Center', linkUrl: 'claims-center'},
    ]
  }
]

export const Footer = () => {

  return (
    <Wrapper>
      <Content>
        <Logo src={logo} alt="logo"/>
        <FooterLinks>
          {footerLinks.map(linkList => <FooterList key={linkList.sectionTitle} linkList={linkList}/>)}
        </FooterLinks>
      </Content>
    </Wrapper>
  )
}