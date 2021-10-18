import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

import {Button} from "../../../../components/Button/Button";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 50px;
  flex-direction: column;

  @media only screen and (min-width: 1200px) {
    width: 80%;
    margin-bottom: 150px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Text = styled.div`
  & h2, p {
    text-align: center;
  }

  & h2 {
    font-size: 2em;
  }

  & p {
    font-size: 1.2em;
  }

  @media only screen and (min-width: 1200px) {
    & h2, p {
      text-align: left;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  & button {
    margin: 10px;
  }
`;

export const CallToAction = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Text>
        <h2>Are you looking for an insurance?</h2>
        <p>Contact us to order now</p>
      </Text>
      <Buttons>
        <Button text='Call Us' onClick={() => history.push('/not-found')} />
        <Button isDark text='Send a Message' onClick={() => history.push('/not-found')} />
      </Buttons>
    </Wrapper>
  )
}