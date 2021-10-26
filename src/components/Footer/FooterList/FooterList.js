import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px;

  @media only screen and (min-width: 1200px) {
    margin: 30px 60px 40px 0;
  }
`;

const Title = styled.p`
  font-weight: bold;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  
  & li {
    margin-bottom: 10px;
    
    & a {
      color: #000;
    }
  }
`;

export const FooterList = ({linkList}) => {

  return (
    <Wrapper>
      <Title>{linkList.sectionTitle}</Title>
      <List>{linkList.links.map(link => <li key={link.linkTitle}><Link to={link.linkUrl}>{link.linkTitle}</Link></li>)}</List>
    </Wrapper>
  )
}