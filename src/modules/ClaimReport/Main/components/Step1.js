import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button/Button";

const Input = styled.input`
  margin-bottom: 20px;
  height: 30px;
  line-height: 30px;
  background-color: rgba(220, 204, 163);
  border: 2px solid #824c71;
  border-radius: 5px;
`;

export const Step1 = ({ setActiveStep }) => {

  return (
    <>
      <label htmlFor="fName">First name</label>
      <Input id="fName" type="text" autoComplete="name"/>
      <label htmlFor="sName">Second name</label>
      <Input id="sName" type="text" autoComplete="name"/>
      <label htmlFor="birthday">Birthday</label>
      <Input id="birthday" type="text" autoComplete="date"/>
      <label htmlFor="phone">Phone number</label>
      <Input id="phone" type="text" autoComplete="phone"/>
      <label htmlFor="email">Email</label>
      <Input id="email" type="text" autoComplete="email"/>
      <label htmlFor="policy">Policy number</label>
      <Input id="policy" type="text" autoComplete="policy"/>
      <Button isDark onClick={() => setActiveStep('step2')} text='Continue' align='end'/>
    </>
  )
}