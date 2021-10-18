import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 100px;
`;

export const NotFound = () => {
  return (
    <Container>
      <h1>Sorry</h1>
      <h2>This page is not ready yet...</h2>
    </Container>
  )
}