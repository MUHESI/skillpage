import styled from "styled-components";
import { Link } from "react-router-dom";

// ()   []  { }    `` #

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? " #000dla" : "CD853F")};
  white-space: nowrap;
  outline: none;
  border: 1px solid white;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  opacity: 0.8;
  //padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  padding: ${({ big }) => (big ? "5px" : " 10px")};
  color: ${({ primary }) => (primary ? "white" : "white")};
  font-size: ${({ big }) => (big ? "13px" : "15px")};
  font-weight: bold;
  &:hover {
    transform: translateX(-5px);
    text-decoration: none;
    color: white;
    border-radius: 0px;
    opacity: 1;
  }
`;
// primary="true" round="true" big="true" to="/contact"
