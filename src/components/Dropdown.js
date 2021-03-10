import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { MenuData } from "../data/MenuData";
import { Button } from "./Button";
import styled, { css } from "styled-components/macro";
/**
import {
  Icon,
  CloseIcon,
  DropdownWrapper,
  DropdownMenu,
  DropdownLink,
  BtnWrap,
  DropdownContainer,
} from "../styledComponets/dropdownStyled"; */

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: white;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 820px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  opacity: 1;
  &:hover {
    text-decoration: none;
    transition: 0.1s ease-in-out;
    opacity: 0.7;
    color: white;
  }
`;
const BtnWrap = styled.div`
  justify-content: center;
  display: flex;
`;

// ()   []  { }    `` #
const DropdownContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: #121e58; // couleur Bleu.
  color: white;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.5s case-ease-in-out;
  opacity: 1;

  border-bottom: 1px solid #ffd103;
  top: ${({ IsOpen }) => (IsOpen ? "0" : "-100%")};
`;
//
// opacity: ${({ IsOpen }) => (IsOpen ? "1" : "0")};
const Dropdown = ({ IsOpen, toggle }) => {
  return (
    <DropdownContainer IsOpen={IsOpen} onClick={toggle}>
      <Icon OnClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {MenuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}{" "}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            REJOINDRE
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
