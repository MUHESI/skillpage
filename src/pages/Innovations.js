import React, { useState } from "react";
import { ProgramsData } from "../data/ProgramsData";
import PhoneComponent from "../components/PhoneComponent";
import TvContenair from "../components/TvContenair";

import { Box } from "../styledComponets/CresStyled";

const Innovations = () => {
  return (
    <>
      <Box>
        <h2 style={{ color: "white" }}> Innovations PAGE </h2>
      </Box>

      <PhoneComponent />
      <TvContenair />
    </>
  );
};

export default Innovations;
