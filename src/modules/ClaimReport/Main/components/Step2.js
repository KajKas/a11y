import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 1200px) {
    width: 50%;
  }
`;

const Input = styled.input`
  height: 30px;
  line-height: 30px;
  background-color: rgba(220, 204, 163);
  border: 2px solid #824c71;
  border-radius: 5px;
  padding: 1px 2px;

  &.alert {
    border-color: red;
  }
`;

const TextArea = styled.textarea`
  background-color: rgba(220, 204, 163);
  border: 2px solid #824c71;
  border-radius: 5px;

  &.alert {
    border-color: red;
  }
`;

const Label = styled.label`
  margin-top: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const RadioContainer = styled.div`
  &.alert {
    border: 2px solid red;
    border-radius: 5px;
  }
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

const InputAlert = styled.span`
  color: red;
`;

export const Step2 = ({
                        setActiveStep,
                        purpose,
                        country,
                        address,
                        date,
                        description,
                        setPurpose,
                        setCountry,
                        setAddress,
                        setDate,
                        setDescription
                      }) => {
  const [purposeCheck, setPurposeCheck] = useState(false);
  const [countryCheck, setCountryCheck] = useState(false);
  const [addressCheck, setAddressCheck] = useState(false);
  const [dateCheck, setDateCheck] = useState(false);
  const [descriptionCheck, setDescriptionCheck] = useState(false);

  const checkPurpose = () => setPurposeCheck(!purpose);
  const checkCountry = () => setCountryCheck(!country);
  const checkAddress = () => setAddressCheck(!address);
  const checkDate = () => setDateCheck(!date);
  const checkDescription = () => setDescriptionCheck(!description);

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value)
  }
  const handleCountryChange = (event) => {
    setCountry(event.target.value)
  }
  const handleAddressChange = (event) => {
    setAddress(event.target.value)
  }
  const handleDateChange = (event) => {
    setDate(event.target.value)
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const checkFields = (event) => {
    event.preventDefault();
    checkPurpose();
    checkCountry();
    checkAddress();
    checkDate();
    checkDescription();

    if (purpose && country && address && date && description) {
      setActiveStep('step3')
    }
  }

  return (
    <Container id="panel-2" role="tabpanel" tabIndex="0" aria-labelledby="tab-2">
      <Form>
        <RadioContainer className={purposeCheck ? 'alert' : ''} onBlur={checkPurpose}>
          <legend>Purpose of travel</legend>
          <Radio>
            <RadioLabel htmlFor="tourism">
              <input type="radio" id="tourism" name="purpose" value="tourism" onChange={handlePurposeChange}/><span/>tourism
            </RadioLabel>
          </Radio>
          <Radio>
            <RadioLabel htmlFor="study-mental-work">
              <input type="radio" id="study-mental-work" name="purpose" value="study-mental-work"
                     onChange={handlePurposeChange}/><span/>study / mental work
            </RadioLabel>
          </Radio>
          <Radio>
            <RadioLabel htmlFor="physical-work">
              <input type="radio" id="physical-work" name="purpose" value="physical-work"
                     onChange={handlePurposeChange}/><span/>physical work
            </RadioLabel>
          </Radio>
          <Radio>
            <RadioLabel htmlFor="high-risk-sport">
              <input type="radio" id="high-risk-sport" name="purpose" value="high-risk-sport"
                     onChange={handlePurposeChange}/><span/>high-risk sport
            </RadioLabel>
          </Radio>
        </RadioContainer>
        {purposeCheck ? <InputAlert>choose purpose</InputAlert> : null}
        <Label htmlFor="country">Country</Label>
        <Input id="country" type="text" autoComplete="country" name="country" value={country}
               onChange={e => handleCountryChange(e)} className={countryCheck ? 'alert' : ''} onBlur={checkCountry}/>
        {countryCheck ? <InputAlert>insert country</InputAlert> : null}
        <Label htmlFor="address">Address</Label>
        <Input id="address" type="text" autoComplete="address" name="address" value={address}
               onChange={e => handleAddressChange(e)} className={addressCheck ? 'alert' : ''} onBlur={checkAddress}/>
        {addressCheck ? <InputAlert>insert address</InputAlert> : null}
        <Label htmlFor="date">Date</Label>
        <Input type="date" id="date" name="date" value={date} onChange={e => handleDateChange(e)}
               className={dateCheck ? 'alert' : ''} onBlur={checkDate}/>
        {dateCheck ? <InputAlert>insert date</InputAlert> : null}
        <Label htmlFor="description">Incident description</Label>
        <TextArea id="description" rows={5} name="description" value={description}
                  onChange={e => handleDescriptionChange(e)} className={descriptionCheck ? 'alert' : ''} onBlur={checkDescription}/>
        {descriptionCheck ? <InputAlert>insert description</InputAlert> : null}
        <ButtonsContainer>
          <Button onClick={() => setActiveStep('step1')} text='Return' align='start'/>
          <Button isDark onClick={(e) => checkFields(e)} text='Continue' align='end'/>
        </ButtonsContainer>
      </Form>
    </Container>
  )
}