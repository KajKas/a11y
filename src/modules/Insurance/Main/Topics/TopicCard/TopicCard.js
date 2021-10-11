import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: ${ props => props.image && `url('${props.image}')`};
  background-size: cover;
  position: relative;
  width: 100vw;
  height: 100vw;
  margin-bottom: 60px;

  @media only screen and (min-width: 1200px) {
    height: 300px;
    width: 300px;
    margin: 20px;
  }
`;

const TopicTitle = styled.p`
  position: absolute;
  top: calc(100vw - 10px);

  @media only screen and (min-width: 1200px) {
    bottom: -60px;
    top: unset;
  }
`;

export const TopicCard = ({ image, alt, title }) => {

  return (
    <Wrapper title={alt} image={image}>
      <TopicTitle>{title}</TopicTitle>
    </Wrapper>
  )
}