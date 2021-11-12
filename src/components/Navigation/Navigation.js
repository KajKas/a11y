import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import { useIsDesktop } from "../../styles/breakpoints";

import logo from '../../assets/logo.png'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #4a2545;
  height: 60px;
  background-color: #e7d5a2;

  @media only screen and (min-width: 768px) {
    padding: 0 200px;
  }
  
  a {
    color: #333C11;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  padding: 20px;
  
  &:hover {
    background-color: #90aa86;
  }
  
  &.active {
    font-weight: bold;
  }
`;

const Logo = styled(Link)`
  margin-left: 20px;
  
  & img {
    height: 70px;
  } 
`;

const Hamburger = styled(FontAwesomeIcon)`
  margin-right: 20px;
`;

export const Navigation = () => {
  const isDesktop = useIsDesktop();

  return (
    <Wrapper>
      <Logo to="/" aria-label='go to homepage'><img src={logo} alt="" aria-hidden="true" /></Logo>
      {isDesktop ? <div>
        <StyledNavLink exact to='/'>Insurance</StyledNavLink>
        <StyledNavLink exact to='/about-us'>About us</StyledNavLink>
        <StyledNavLink exact to='/claim-report'>Claim report</StyledNavLink>
        <StyledNavLink exact to='/contact'>Contact</StyledNavLink>
      </div> : <Hamburger aria-label='menu' icon={faBars} />}
    </Wrapper>
  )
}