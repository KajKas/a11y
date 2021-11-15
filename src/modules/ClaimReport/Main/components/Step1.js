import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
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

const Label = styled.label`
  margin-top: 20px;
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

const InputAlert = styled.span`
  color: red;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
`;

export const Step1 = ({
                        setActiveStep,
                        setFName,
                        setSName,
                        setBirthday,
                        setPhone,
                        setEmail,
                        setPolicy,
                        fName,
                        sName,
                        birthday,
                        phone,
                        email,
                        policy
                      }) => {
  const [fNameCheck, setFNameCheck] = useState(false);
  const [sNameCheck, setSNameCheck] = useState(false);
  const [birthdayCheck, setBirthdayCheck] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [policyCheck, setPolicyCheck] = useState(false);

  const [correctEmailCheck, setCorrectEmailCheck] = useState(false);
  const [correctPhoneCheck, setCorrectPhoneCheck] = useState(false);

  const handleFNameChange = (event) => {
    setFName(event.target.value)
  }
  const handleSNameChange = (event) => {
    setSName(event.target.value)
  }
  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePolicyChange = (event) => {
    setPolicy(event.target.value)
  }
  const checkFName = () => setFNameCheck(!fName);
  const checkSName = () => setSNameCheck(!sName);
  const checkBirthday = () => setBirthdayCheck(!birthday);
  const checkPhone = () => setPhoneCheck(!phone);
  const checkEmail = () => setEmailCheck(!email);
  const checkPolicy = () => setPolicyCheck(!policy);

  const validateEmail = () => {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    setCorrectEmailCheck(!pattern.test(email))
    return pattern.test(email);
  }
  const validatePhone = () => {
    const pattern = /^[0-9\b]+$/g;
    setCorrectPhoneCheck(!pattern.test(phone));
    return pattern.test(phone);
  }
  const validateCorrectFields = () => {
    validatePhone();
    validateEmail();
    return validateEmail() && validatePhone();
  };
  const checkFields = (event) => {
    event.preventDefault();checkFName();
    checkSName();
    checkBirthday();
    checkPhone();
    checkEmail();
    checkPolicy();
    validateCorrectFields();

    if (fName && sName && birthday && phone && email && policy) {
      if (/^[0-9\b]+$/g.test(phone) && /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g.test(email)) {
        setActiveStep('step2');
      }
    }

  }

  return (
    <Container id="panel-1" role="tabpanel" tabIndex="0" aria-labelledby="tab-1">
      <Form>
        <Label htmlFor="fName">First name</Label>
        <Input id="fName" type="text" autoComplete="name" className={fNameCheck ? 'alert' : ''} value={fName}
               onChange={event => handleFNameChange(event)}/>
        {fNameCheck ? <InputAlert>insert first name</InputAlert> : null}
        <Label htmlFor="sName">Second name</Label>
        <Input id="sName" type="text" autoComplete="name" className={sNameCheck ? 'alert' : ''} value={sName}
               onChange={event => handleSNameChange(event)}/>
        {sNameCheck ? <InputAlert>insert second name</InputAlert> : null}
        <Label htmlFor="birthday">Birthday</Label>
        <Input type="date" id="birthday" name="birthday" className={birthdayCheck ? 'alert' : ''} value={birthday}
               onChange={event => handleBirthdayChange(event)}/>
        {birthdayCheck ? <InputAlert>insert birthday</InputAlert> : null}
        <Label htmlFor="phone">Phone number</Label>
        <Input id="phone" type="tel" autoComplete="phone" className={phoneCheck || correctPhoneCheck ? 'alert' : ''}
               value={phone}
               onChange={event => handlePhoneChange(event)}/>
        {phoneCheck ? <InputAlert>insert phone number</InputAlert> : null}
        {correctPhoneCheck ? <InputAlert>insert proper phone number</InputAlert> : null}
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" autoComplete="email" className={emailCheck || correctEmailCheck ? 'alert' : ''}
               value={email}
               onChange={event => handleEmailChange(event)}/>
        {emailCheck ? <InputAlert>insert email address</InputAlert> : null}
        {correctEmailCheck ? <InputAlert>insert proper email address</InputAlert> : null}
        <Label htmlFor="policy">Policy number</Label>
        <Input id="policy" type="text" autoComplete="policy" className={policyCheck ? 'alert' : ''} value={policy}
               onChange={event => handlePolicyChange(event)}/>
        {policyCheck ? <InputAlert>insert policy</InputAlert> : null}
        <ButtonContainer>
          <Button isDark onClick={event => checkFields(event)} text='Continue' align='end'/>
        </ButtonContainer>
      </Form>
    </Container>
  )
}