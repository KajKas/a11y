import React from "react";
import styled from "styled-components";

import {MainSections} from "./MainSections/MainSections";
import {Topics} from "./Topics/Topics";
import {Review} from "./Review/Review";
import {CallToAction} from "./CallToAction/CallToAction";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = () => {
  return (
    <StyledMain>
      <MainSections/>
      <Topics/>
      <Review/>
      <CallToAction/>
    </StyledMain>
  )
}