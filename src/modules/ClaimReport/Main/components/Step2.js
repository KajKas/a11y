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
  padding: 1px 2px;
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  background-color: rgba(220, 204, 163);
  border: 2px solid #824c71;
  border-radius: 5px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RadioContainer = styled.div`
  margin-bottom: 20px;
`;

const Radio = styled.div`
  margin: 10px 0;

  input {
    margin-right: 10px;
  }
`;

const RadioLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  line-height: 26px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  :focus-within {
    border: 1px solid blue;
  }
  
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  :hover input ~ span {
    background-color: #ccc;
  }
  
  input:checked ~ span {
    background-color: #824c71;
  }

  input:checked ~ span:after {
    display: block;
  }
`;

export const Step2 = ({setActiveStep}) => {

  return (
    <>
      <RadioContainer>
        <legend>Purpose of travel</legend>
        <Radio>
          <RadioLabel htmlFor="tourism" onFocus={() => console.log('focus')}>
            <input type="radio" id="tourism" name="tourism" value="tourism" /><span/>tourism
          </RadioLabel>
        </Radio>
        <Radio>
          <RadioLabel htmlFor="study-mental-work" onFocus={() => console.log('focus2')}>
            <input type="radio" id="study-mental-work" name="study-mental-work" value="study-mental-work"/><span/>study / mental work
          </RadioLabel>
        </Radio>
        <Radio>
          <RadioLabel htmlFor="physical-work">
            <input type="radio" id="physical-work" name="physical-work" value="physical-work"/><span/>physical work
          </RadioLabel>
        </Radio>
        <Radio>
          <RadioLabel htmlFor="high-risk-sport">
            <input type="radio" id="high-risk-sport" name="high-risk-sport" value="high-risk-sport"/><span/>high-risk sport
          </RadioLabel>
        </Radio>
      </RadioContainer>
      <label htmlFor="country">Country</label>
      <Input id="country" type="text" autoComplete="country" name="country" />
      <label htmlFor="address">Address</label>
      <Input id="address" type="text" autoComplete="address" name="address" />
      <label htmlFor="date">Date</label>
      <Input type="date" id="date" name="date"/>
      <label htmlFor="description">Incident description</label>
      <TextArea id="description" rows={5} name="description" />
      <ButtonsContainer>
        <Button onClick={() => setActiveStep('step1')} text='Return' align='start'/>
        <Button isDark onClick={() => setActiveStep('step3')} text='Continue' align='end'/>
      </ButtonsContainer>
    </>
  )
}