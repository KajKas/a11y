import React from "react";
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
      <Title>{linkList.title}</Title>
      <List>{linkList.links.map(link => <li key={link}><a href="#">{link}</a></li>)}</List>
    </Wrapper>
  )
}