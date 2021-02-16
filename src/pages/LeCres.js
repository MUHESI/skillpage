import React, { useState } from "react";
import { ProgramsData } from "../data/ProgramsData";
import HeroLeCres from "../components/HeroLeCres";
import History from "../components/LeCres/History";
import Partenaires from "../components/LeCres/Partenaires";

// Data
import { SliderLeCresData } from "../data/SliderLeCresData";
// CSS
import MissionVisionAbout from "../components/MissionVisionAbout";

const LeCres = () => {
  return (
    <>
      <HeroLeCres slides={SliderLeCresData} />
      <MissionVisionAbout />
      <History />
      <Partenaires />
    </>
  );
};

export default LeCres;
