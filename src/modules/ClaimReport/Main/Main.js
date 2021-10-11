import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button/Button";

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

const Input = styled.input`
  margin-bottom: 20px;
  height: 30px;
  line-height: 30px;
`;

export const Main = () => {

  return (
    <Wrapper>
      <Form>
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
        <Button isDark text='Continue' align='end'/>
      </Form>
    </Wrapper>
  )
}