import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  align-items: center;
`;

const ExpenseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: 1200px) {
    justify-content: unset;
  }
`;

const Amount = styled.div`
  @media only screen and (min-width: 1200px) {
    width: 100px;
  }
`;

const IconContainer = styled.div`
  display: flex;
`;

const IconButton = styled.button`
  border: none;
  background-color: unset;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 25px;
  margin-left: 20px;
`;

export const Expense = ({ expenseData, removeExpense, expenseIndex, setIsModalOpen, setIsEditModal, setExpenseToEditIndex, setModalName, setModalPrice }) => {
  const handleEdit = () => {
    setIsModalOpen(true);
    setIsEditModal(true);
    setExpenseToEditIndex(expenseIndex);
    setModalName(expenseData.name);
    setModalPrice(expenseData.amount);
  }

  return (
    <Container>
      <ExpenseInfo>
        <Amount>${expenseData.amount}</Amount>
        <span>{expenseData.name}</span>
      </ExpenseInfo>
      <IconContainer>
        <IconButton aria-label="remove expense"><Icon icon={faTrashAlt} onClick={() => removeExpense(expenseData)} /></IconButton>
        <IconButton aria-label="edit expense"><Icon icon={faPen} onClick={() => handleEdit()} /></IconButton>
      </IconContainer>
    </Container>
  )
}