import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button/Button";
import {Expense} from "./Expense";
import {Modal} from "./Modal";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExpensesContainer = styled.div`
  margin: 20px 0 60px 0;
  display: flex;
  flex-direction: column;
`;

export const Step3 = ({setActiveStep, expenses, setExpenses}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [expenseToEditIndex, setExpenseToEditIndex] = useState();
  const [modalName, setModalName] = useState('');
  const [modalPrice, setModalPrice] = useState('');

  const addExpense = (newExpense) => {
    const newExpenseList = [...expenses];
    newExpenseList.push(newExpense)
    setExpenses(newExpenseList);
  };
  const editExpense = () => {
    const items = [...expenses];
    const editedItem = {...items[expenseToEditIndex]}
    editedItem.name = modalName;
    editedItem.amount = modalPrice;
    items[expenseToEditIndex] = editedItem;
    setExpenses(items);
  }
  const removeExpense = (expenseToRemove) => setExpenses([...expenses].filter(exp => exp.name !== expenseToRemove.name));

  return (
    <>
      Expense report
      <ExpensesContainer>
        {expenses.map((item, index) =>
          <Expense
            key={item.name}
            expenseData={item}
            addExpense={addExpense}
            expenseIndex={index}
            editExpense={editExpense}
            removeExpense={removeExpense}
            setModalName={setModalName}
            setModalPrice={setModalPrice}
            setIsModalOpen={setIsModalOpen}
            setIsEditModal={setIsEditModal}
            setExpenseToEditIndex={setExpenseToEditIndex} />)}
        <Button onClick={() => setIsModalOpen(true)} text='+ Add another' align='end'/>
      </ExpensesContainer>
      <ButtonsContainer>
        <Button onClick={() => setActiveStep('step2')} text='Return' align='start'/>
        <Button isDark onClick={() => setActiveStep('step1')} text='Submit' align='end'/>
      </ButtonsContainer>
      {isModalOpen &&
      <Modal addExpense={addExpense} setIsModalOpen={setIsModalOpen} modalName={modalName} setModalName={setModalName}
             modalPrice={modalPrice} setModalPrice={setModalPrice} editExpense={editExpense} isEditModal={isEditModal}
             setIsEditModal={setIsEditModal}/>}
    </>
  )
}