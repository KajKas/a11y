import React, {useEffect} from "react";

import styled from "styled-components";
import {useLocation} from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 100px;
`;

export const NotFound = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  return (
    <Container>
      <h1>Sorry</h1>
      <h2>This page is not ready yet...</h2>
    </Container>
  )
}