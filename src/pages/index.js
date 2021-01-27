import React, { Component, useState } from "react";
import styled, { css } from "styled-components/macro";
// import des ..........
//import React, {  } from "react";

import GlobalStyle from "../components/gbobalStyles";
import Hero from "../components/Hero";
import Programs from "../components/Programs";

// Data
import { SliderData } from "../data/SliderData";
import { ProgramsData } from "../data/ProgramsData";

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Hero slides={SliderData} />
      <Programs programs={ProgramsData} />
    </>
  );
};

export default Home;
/** Choses a importer !! 
menu navbar!
*/

// ()   []  { }    `` #
