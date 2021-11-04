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
  color: #fff;

  background-color: ${props => props.isDark ? '#4a2545' : 'rgba(126, 38, 115, 0.5)'};
  align-self: ${props => props.align};
`;

export const Button = ({ isDark, text, align, onClick }) => {
  return (
    <StyledButton isDark={isDark} align={align} onClick={onClick}>{text}</StyledButton>
  )
}