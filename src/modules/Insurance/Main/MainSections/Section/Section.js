import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${ props => props.revertOrder ? 'row-reverse' : 'row'};
`;

export const Section = ({ image, alt, children, revertOrder, title }) => {

  return (
    <Wrapper revertOrder={revertOrder}>
      <img src={image} alt={alt} />
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </Wrapper>
  )
}