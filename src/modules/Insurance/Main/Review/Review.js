import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  margin: 50px 0 50px 0;
  min-height: 300px;
  text-align: center;
  background-color: #e7d5a2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1200px) {
    width: 80%;
    margin: 150px 0 150px 0;
  }
`;

const ReviewContent = styled.p`
  font-size: 1.6em;
`;

const ReviewAuthor = styled.p`
  font-size: 1em;
`;

export const Review = () => {

  return (
    <Wrapper>
        <ReviewContent>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci autem consequatur dicta dignissimos"</ReviewContent>
        <ReviewAuthor>Donald Duck, CEO of Disney</ReviewAuthor>
    </Wrapper>
  )
}