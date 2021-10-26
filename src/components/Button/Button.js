import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: ${props => props.isDark ? '#4a2545' : '#fff'};
  color: ${props => props.isDark ? '#fff' : '#4a2545'};
  align-self: ${props => props.align};
`;

export const Button = ({ isDark, text, align, onClick }) => {
  return (
    <StyledButton isDark={isDark} align={align} onClick={onClick}>{text}</StyledButton>
  )
}