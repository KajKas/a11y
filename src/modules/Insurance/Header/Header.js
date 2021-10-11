import React from "react";
import styled from "styled-components";

import travel1 from '../../../assets/travel1.jpg'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-around;
`;

const Banner = styled.div`
  background: url(${travel1}) no-repeat bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
`;

const BannerText = styled.div`
  background-color: rgba(1, 1, 1, 0.5);
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  
  & h1 {
    font-size: 3em;
  }
  
  & p {
    font-size: 1.5em;
    text-align: center;
  }

  & a {
    font-size: 1.5em;
    color: #fff;
  }

  @media only screen and (min-width: 1200px) {
    height: 50%;
    width: 50%;
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <Banner>
        <BannerText>
          <h1>Travel Insurance</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aperiam atque commodi, culpa eaque
            explicabo
            facilis hic ipsa modi, natus nobis porro possimus quam quod repellendus sequi vel voluptatem?</p>
          <a href="#">Order now</a>
        </BannerText>
      </Banner>
    </Wrapper>
  )
}