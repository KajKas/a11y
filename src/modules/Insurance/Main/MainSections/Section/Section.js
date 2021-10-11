import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${props => props.revertOrder ? 'row-reverse' : 'row'};
  flex-wrap: wrap;
`;

const StyledImage = styled.img`
  width: 100%;
  
  @media only screen and (min-width: 1200px) {
    width: 500px;
    margin: 20px;
  }
`;

const TextContent = styled.div`
  width: 100%;

  @media only screen and (min-width: 1200px) {
    width: 500px;
    margin: 20px;
  }
`;

export const Section = ({image, alt, children, revertOrder, title}) => {

  return (
    <Wrapper>
      <Content revertOrder={revertOrder}>
        <StyledImage src={image} alt={alt}/>
        <TextContent>
          <h2>{title}</h2>
          {children}
        </TextContent>
      </Content>
    </Wrapper>
  )
}