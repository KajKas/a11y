import React, {useEffect, useState} from "react";
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {useLocation} from "react-router-dom";

export const ClaimReport = () => {
  const [activeStep, setActiveStep] = useState('step1')
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  return (
    <>
      <Header setActiveStep={setActiveStep} activeStep={activeStep} />
      <Main setActiveStep={setActiveStep} activeStep={activeStep} />
    </>
  )
}