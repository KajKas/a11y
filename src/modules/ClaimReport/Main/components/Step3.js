import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/Button/Button";
import {Expense} from "./Expense";
import {Modal} from "./Modal";

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

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ExpensesContainer = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;

  &.alert {
    border: 2px solid red;
    border-radius: 5px;
  }
`;

const ExpenseWrapper = styled.span`
  margin-bottom: 60px;
`;

const InputAlert = styled.span`
  color: red;
`;

export const Step3 = ({setActiveStep, expenses, setExpenses}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [expenseToEditIndex, setExpenseToEditIndex] = useState();
  const [modalName, setModalName] = useState('');
  const [modalPrice, setModalPrice] = useState('');
  const [expenseCheck, setExpenseCheck] = useState(false);

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
  const checkExpenses = () => setExpenseCheck(!expenses.length);
  const handleSubmit = (event) => {
    event.preventDefault();
    checkExpenses();
    if (expenses.length) setActiveStep('step1');
  }

  useEffect(() => {
    checkExpenses();
  }, [expenses.length])

  return (
    <Container id="panel-3" role="tabpanel" tabIndex="0" aria-labelledby="tab-3">
      <Form>
        Expense report
        <ExpenseWrapper>
          <ExpensesContainer className={expenseCheck ? 'alert' : ''}>
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
                setExpenseToEditIndex={setExpenseToEditIndex}/>)}
            <Button onClick={() => setIsModalOpen(true)} text='+ Add another' align='end'/>
          </ExpensesContainer>
          {expenseCheck ? <InputAlert>at least one expense is needed</InputAlert> : null}
        </ExpenseWrapper>
        <ButtonsContainer>
          <Button onClick={() => setActiveStep('step2')} text='Return' align='start'/>
          <Button isDark onClick={(e) => handleSubmit(e)} text='Submit' align='end'/>
        </ButtonsContainer>
        {isModalOpen &&
        <Modal addExpense={addExpense} setIsModalOpen={setIsModalOpen} modalName={modalName} setModalName={setModalName}
               modalPrice={modalPrice} setModalPrice={setModalPrice} editExpense={editExpense} isEditModal={isEditModal}
               setIsEditModal={setIsEditModal} isModalOpen={isModalOpen} />}
      </Form>
    </Container>
  )
}