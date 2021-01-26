import React, { Component, useState } from "react";
import styled, { css } from "styled-components/macro";
// import des ..........
//import React, {  } from "react";
import Dropdown from "../components/Dropdown";
import Navbar from "../components/Navbar";
import GlobalStyle from "../components/gbobalStyles";
import Hero from "../components/Hero";
import { SliderData } from "../data/SliderData";

const Home = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <>
      <GlobalStyle />

      <Dropdown IsOpen={IsOpen} toggle={toggle} />
      <Hero slides={SliderData} />
    </>
  );
};

export default Home;
/** Choses a importer !! 
menu navbar!
*/

// ()   []  { }    `` #
