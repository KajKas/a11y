import React, {useState} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  padding-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 1200px) {
    width: 80%;
  }
`;

const Steps = styled.div`
  display: flex;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

const Step = styled.button`
  border-radius: 10px;
  width: 300px;
  height: 50px;
  background-color: #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 30px;
  cursor: pointer;
  
  &.active {
    background-color: #000;
    color: #fff;
  }
`;

export const Header = () => {
  const [activeButton, setActiveButton] = useState('button1')

  return (
    <Wrapper>
      <Content>
        <h1>Claim report</h1>
        <Steps>
          <Step onClick={() => setActiveButton('button1')} className={activeButton === 'button1' && 'active'}>Step 1 - Personal Details</Step>
          <Step onClick={() => setActiveButton('button2')} className={activeButton === 'button2' && 'active'}>Step 2 - Incident Details</Step>
          <Step onClick={() => setActiveButton('button3')} className={activeButton === 'button3' && 'active'}>Step 3 - Expense Report</Step>
        </Steps>
      </Content>
    </Wrapper>
  )
}