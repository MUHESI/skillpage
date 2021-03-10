import React from "react";
import { Router } from "react-router";
import { MenuData } from "../data/MenuData";
import { Button } from "./Button";
import logo from "../images/logo/logoCRES.png";
import {
  Logo,
  MenuBars,
  Nav,
  NavBtn,
  NavMenu,
  NavMenuLinks,
} from "../styledComponets/NavbarStyled";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">
        <img width={50} className="img-fluid" src={logo} alt="CRES" />
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {MenuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            <span> {item.title}</span>
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
};

export default Navbar;
