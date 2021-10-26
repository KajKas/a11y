import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import travel1 from '../../../assets/travel9.jpg'

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
  background-color: rgba(144, 170, 134, 0.7);
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
          <Link to="/order-now">Order now</Link>
        </BannerText>
      </Banner>
    </Wrapper>
  )
}