import React, {useState} from 'react';
import styled from "styled-components";
import {Step1} from "./components/Step1";
import {Step2} from "./components/Step2";
import {Step3} from "./components/Step3";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  @media only screen and (min-width: 1200px) {
    margin-bottom: 150px;
  }
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const Main = ({ setActiveStep, activeStep }) => {
  const [expenses, setExpenses] = useState([{ name: 'old name', amount: '123' }])

  const handleFormStep = () => {
    switch (activeStep) {
      case 'step1':
        return <Step1 setActiveStep={setActiveStep}/>
      case 'step2':
        return <Step2 setActiveStep={setActiveStep} />
      case 'step3':
        return <Step3 setActiveStep={setActiveStep} expenses={expenses} setExpenses={setExpenses} />
    }
  }

  return (
    <Wrapper>
      <Form>
        {handleFormStep()}
      </Form>
    </Wrapper>
  )
}