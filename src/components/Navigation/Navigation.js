import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { useIsDesktop } from "../../styles/breakpoints";

import logo from '../../assets/logo-light.png'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  height: 60px;

  @media only screen and (min-width: 768px) {
    padding: 0 200px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  padding: 20px;
  
  &:hover {
    background-color: #C4C4C4;
  }
  
  &.active {
    font-weight: bold;
  }
`;

const Logo = styled(Link)`
  margin-left: 20px;
  height: 40px;
  
  & img {
    height: 40px;
  } 
`;

const Hamburger = styled(FontAwesomeIcon)`
  margin-right: 20px;
`;

export const Navigation = () => {
  const isDesktop = useIsDesktop();

  return (
    <Wrapper>
      <Logo to="/" aria-label='go to homepage'><img src={logo} alt="logo" /></Logo>
      {isDesktop ? <div>
        <StyledNavLink exact to='/'>Insurance</StyledNavLink>
        <StyledNavLink exact to='/not-found'>About us</StyledNavLink>
        <StyledNavLink exact to='/claim-report'>Claim report</StyledNavLink>
        <StyledNavLink exact to='/not-found'>Contact</StyledNavLink>
      </div> : <Hamburger aria-label='menu' icon={faBars} />}
    </Wrapper>
  )
}