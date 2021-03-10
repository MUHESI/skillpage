import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between; /** very important */
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  color: white;
  background-color: #121e58; /* very important ! */
  border-bottom: 1px solid #ffd103;
`;

export const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

export const MenuBars = styled(FaBars)`
  display: none;
  transition: 2s;

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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  margin: -50px;
  @media screen and (max-width: 820px) {
    display: none;
  }
  span:hover {
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}

  &:hover {
    text-decoration: none;
    transition: 0.5s ease-in-out;
    /* opacity: 0.7; */
    color: #ffd103;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  @media screen and (max-width: 820px) {
    display: none;
  }
`;
