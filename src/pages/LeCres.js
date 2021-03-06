import React, { useState } from "react";
import HeroLeCres from "../components/HeroLeCres";
import History from "../components/LeCres/History";
import SectionPartenairesBudgets from "../components/LeCres/partenersBudgets";
import Coordination from "../components/LeCres/Coordination";
import CarouselCoordination from "../components/LeCres/CarouselCoordination";

import Partenaires from "../components/LeCres/Partenaires";
import MissionVisionAbout from "../components/LeCres/MissionVisionAbout";
import Programs from "../components/Programs";

import Footer from "../components/Footer";

// Data
import { SliderLeCresData } from "../data/SliderLeCresData";
import { ImgBackgroundCRES } from "../data/AboutData";
import dataMission from "../helper/dataMission.json";
// import { ProgramsData } from "../data/ProgramsData";
import { HistoryData } from "../data/HistoryData";
import { FooterData } from "../data/FooterData";
import { CoordinationAdmin } from "../data/CoordinationData";

// CSS

const LeCres = () => {
  return (
    <div className=" p-2">
      <HeroLeCres slides={SliderLeCresData} />
      <MissionVisionAbout
        MISSION={dataMission.MissiontData[0].text}
        VISION={dataMission.MissiontData[1].text}
        OBJECTIFS={dataMission.MissiontData[2].text}
        ImgBackground={ImgBackgroundCRES}
      />
      <History HistoryData={HistoryData} />
      <SectionPartenairesBudgets />
      <CarouselCoordination Coordination={CoordinationAdmin} />
      {/* <Coordination CoordinationData={CoordinationData} /> */}
      <Footer FooterData={FooterData} />
    </div>
  );
};

export default LeCres;
