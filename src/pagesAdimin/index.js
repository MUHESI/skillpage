import React, { useState } from "react";
import { ProgramsData } from "../data/ProgramsData";
import PhoneComponent from "../components/PhoneComponent";
import TvContenair from "../components/TvContenair";
import Comments from "../components/Comments";

import { Box } from "../styledComponets/CresStyled";
import SignUp from "../components/formulaires/signUp";

//  <Box>{/* <h2 style={{ color: "white" }}> Innovations PAGE </h2> */}</Box>;

const HomeAdmin = () => {
  return (
    <div>
      <Box>
        <h2 style={{ color: "white" }}> Innovations PAGE </h2>
      </Box>

      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <h3>Gros titres</h3>
          <PhoneComponent />
        </div>
        <div className="col-sm-6 col-md-9 col-lg-9">
          <PhoneComponent />
          <TvContenair />
          {/* <Comments /> */}
          <hr />
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
