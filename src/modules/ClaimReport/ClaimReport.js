import React, {useState} from "react";
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";

export const ClaimReport = () => {
  const [activeStep, setActiveStep] = useState('step1')

  return (
    <>
      <Header setActiveStep={setActiveStep} activeStep={activeStep} />
      <Main setActiveStep={setActiveStep} activeStep={activeStep} />
    </>
  )
}