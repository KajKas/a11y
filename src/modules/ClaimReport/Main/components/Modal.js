import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button/Button";

const Container = styled.div`
  position: fixed;
  top: 20%;
  bottom: 20%;
  left: 10%;
  right: 10%;
  background-color: #dccca3;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  display: flex;
  flex-direction: column;
  padding: 100px;
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

export const Modal = ({ setIsModalOpen, isEditModal, addExpense, modalName, setModalName, modalPrice, setModalPrice, editExpense, setIsEditModal }) => {
  const handleNameChange = (e) => setModalName(e.target.value);
  const handlePriceChange = (e) => setModalPrice(e.target.value);
  const handleAddExpense = () => {
    isEditModal ? editExpense() : addExpense({ name: modalName, amount: modalPrice });
    setIsModalOpen(false);
    setIsEditModal(false);
    setModalName('');
    setModalPrice('');
  }

  return (
    <Container>
      <h1>Expense</h1>
      <Label htmlFor="name">Name</Label>
      <Input id="name" type="text" autoComplete="expense" value={modalName} onChange={(e) => handleNameChange(e)} />
      <Label htmlFor="price">Price</Label>
      <Input id="price" type="text" autoComplete="price" value={modalPrice} onChange={(e) => handlePriceChange(e)} />
      <ButtonsContainer>
        <Button text='Cancel' align='start' onClick={() => setIsModalOpen(false)} />
        <Button isDark text='Add' align='end' onClick={handleAddExpense} />
      </ButtonsContainer>
    </Container>
  )
}