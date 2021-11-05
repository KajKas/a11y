import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
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
  margin: 50px 0;
  flex-wrap: wrap;
`;

const Step = styled.button`
  border-radius: 10px;
  width: 300px;
  height: 50px;
  background-color: rgba(126, 38, 115, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 30px;
  cursor: pointer;
  color: #fff;

  &.active {
    background-color: #4a2545;
  }
`;

export const Header = ({ setActiveStep, activeStep }) => {

  return (
    <Wrapper>
      <Content>
        <h1>Claim report</h1>
        <Steps>
          <Step onClick={() => setActiveStep('step1')} className={activeStep === 'step1' && 'active'}>Step 1 - Personal Details</Step>
          <Step onClick={() => setActiveStep('step2')} className={activeStep === 'step2' && 'active'}>Step 2 - Incident Details</Step>
          <Step onClick={() => setActiveStep('step3')} className={activeStep === 'step3' && 'active'}>Step 3 - Expense Report</Step>
        </Steps>
      </Content>
    </Wrapper>
  )
}