import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: ${ props => props.image && `url('${props.image}')`};
  background-size: cover;
  height: 300px;
  width: 300px;
  margin: 20px;
`;

export const TopicCard = ({ image, alt, title }) => {

  return (
    <Wrapper title={alt} image={image}>
      <p>{title}</p>
    </Wrapper>
  )
}