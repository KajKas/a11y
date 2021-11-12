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

const Forms = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 1200px) {
    width: 100%;
  }
`;

export const Main = ({setActiveStep, activeStep}) => {
  const [expenses, setExpenses] = useState([{name: 'old name', amount: '123'}])
  const [fName, setFName] = useState('');
  const [sName, setSName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [policy, setPolicy] = useState('');

  const handleFormStep = () => {
    switch (activeStep) {
      case 'step1':
        return <Step1 setActiveStep={setActiveStep} email={email} birthday={birthday} setBirthday={setBirthday}
                      setEmail={setEmail} fName={fName} setFName={setFName} phone={phone} setPhone={setPhone}
                      setSName={setSName} sName={sName} policy={policy} setPolicy={setPolicy}/>
      case 'step2':
        return <Step2 setActiveStep={setActiveStep}/>
      case 'step3':
        return <Step3 setActiveStep={setActiveStep} expenses={expenses} setExpenses={setExpenses}/>
      default:
        return <Step1 setActiveStep={setActiveStep}/>
    }
  }

  return (
    <Wrapper>
      <Forms>
        {handleFormStep()}
      </Forms>
    </Wrapper>
  )
}