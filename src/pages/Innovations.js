import React, { useState } from "react";
import { ProgramsData } from "../data/ProgramsData";
import PhoneComponent from "../components/PhoneComponent";
import TvContenair from "../components/TvContenair";
import Comments from "../components/Comments";

import { Box } from "../styledComponets/CresStyled";
import SignUp from "../components/formulaires/signUp";

//  <Box>{/* <h2 style={{ color: "white" }}> Innovations PAGE </h2> */}</Box>;

const Innovations = () => {
  return (
    <>
      <PhoneComponent />
      <TvContenair />
      {/* <Comments /> */}
      <hr />
      <SignUp />
    </>
  );
};

export default Innovations;
