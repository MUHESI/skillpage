import React, { Component, useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import RecentActivities from "../components/RecentActivities";
// import des ..........
//import React, {  } from "react";

import GlobalStyle from "../components/gbobalStyles";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import About from "../components/About";
import Actualities from "../components/Actualities";

// Data
import { SliderData } from "../data/SliderData";
import { ProgramsData } from "../data/ProgramsData";
import { WeAre, Vision, Mission, ImgAbout } from "../data/AboutData";
import { RecentActivitiesData } from "../data/RecentActivitiesData";
import { ActualitiesData } from "../data/ActualitiesData";

//import { useSpring, animated } from "react-spring";

const Home = () => {
  //const props = useSpring({ x: 100, from: { x: 0 } });
  return (
    <>
      <GlobalStyle />
      <Hero slides={SliderData} />
      <Programs programs={ProgramsData} />
      <About
        WeAre={WeAre}
        Vision={Vision}
        Mission={Mission}
        ImgAbout={ImgAbout}
      />
      <div className=""></div>
      <RecentActivities RecentActivitiesData={RecentActivitiesData} />
      <Actualities ActualitiesData={ActualitiesData} />
    </>
  );
};

//   { const Home = useSpring({opacity: 1, from: {opacity: 0}}) return <animated.div style={props}>I will fade in</animated.div> }

export default Home;
/** Choses a importer !! 
menu navbar!
*/

// ()   []  { }    `` #
