import React from 'react';
import styled from "styled-components";
import FocusTrap from 'focus-trap-react'
import {Button} from "../../../../components/Button/Button";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(220, 204, 163, 0.7);
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media only screen and (min-width: 1200px) {
    padding: 5%;
  }
`;

const Content = styled.div`
  background-color: #dccca3;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media only screen and (min-width: 1200px) {
    padding: 100px;
  }
`;

const Input = styled.input`
  margin-bottom: 10px;
  height: 30px;
  line-height: 30px;
  background-color: rgba(220, 204, 163);
  border: 2px solid #824c71;
  border-radius: 5px;
`;

const Label = styled.label`
  margin-top: 30px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  button {
    margin: 10px;
  }
`;

export const Modal = ({
                        setIsModalOpen,
                        isEditModal,
                        addExpense,
                        modalName,
                        setModalName,
                        modalPrice,
                        setModalPrice,
                        editExpense,
                        setIsEditModal,
                        isModalOpen
                      }) => {
  const handleNameChange = (e) => setModalName(e.target.value);
  const handlePriceChange = (e) => setModalPrice(e.target.value);
  const handleAddExpense = () => {
    isEditModal ? editExpense() : addExpense({name: modalName, amount: modalPrice});
    setIsModalOpen(false);
    setIsEditModal(false);
    setModalName('');
    setModalPrice('');
  }

  return (
    <FocusTrap active={isModalOpen}>
      <Container role="dialog" aria-modal="true" aria-labelledby='dialog-title' id='modal'>
        <Content>
          <h1 id='dialog-title'>Add new expense</h1>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" autoComplete="expense" value={modalName} onChange={(e) => handleNameChange(e)}/>
          <Label htmlFor="price">Price</Label>
          <Input id="price" type="text" autoComplete="price" value={modalPrice} onChange={(e) => handlePriceChange(e)}/>
          <ButtonsContainer>
            <Button text='Cancel' align='start' onClick={() => setIsModalOpen(false)}/>
            <Button isDark text='Save' align='end' onClick={handleAddExpense}/>
          </ButtonsContainer>
        </Content>
      </Container>
    </FocusTrap>
  )
}