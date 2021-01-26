import React from "react";
import { Router } from "react-router";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MenuData } from "../data/MenuData";
import { Button } from "./Button";

// ()   []  { }    `` #
const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between; // very important !
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  color: white;
  background-color: #121e58; // very important !
`;

const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
`;
const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;
//background-image: url(${Bars});
const MenuBars = styled(FaBars)`
  display: none;
  trasition: 2s;

  @media screen and (max-width: 820px) {
    opacity: 1;
    display: block;
    background-size: contain;
    height: 20px;
    width: 20px;
    cursor: pointer;
    transform: translateY(-50% 25%);
    transition: 1.2s;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin: -50px;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;

//v<Logo> CRES </Logo>

//const NavMenu = styled.div``;
/*    */
function Navbar({ toggle }) {
  return (
    <Nav>
      <Logo to="/"> CRES </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {MenuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true" round="true" big="true">
          JOINDRE
        </Button>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
