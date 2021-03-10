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
import Partenaires from "../components/Partenaires";
import Carou from "../components/Carousel";
import Footer from "../components/Footer";

// Data
import { SliderData } from "../data/SliderData";
import { ProgramsData } from "../data/ProgramsData";
import { ImgAbout } from "../data/AboutData";
import data from "../helper/data.json";
import { RecentActivitiesData } from "../data/RecentActivitiesData";
import { ActualitiesData } from "../data/ActualitiesData";
import { partenaireData } from "../data/partenaireData";
import { FooterData } from "../data/FooterData";

//import { useSpring, animated } from "react-spring";

const Home = () => {
  //const props = useSpring({ x: 100, from: { x: 0 } });
  return (
    <>
      <GlobalStyle />
      <Hero slides={SliderData} />
      <Programs programs={ProgramsData} />
      <About
        WeAre={data.aboutData[0].text}
        Vision={data.aboutData[1].text}
        Mission={data.aboutData[2].text}
        ImgAbout={ImgAbout}
      />
      <div className="row p-4">
        <div class="col-sm-12 col-md-6 col-lg-6">
          <Partenaires data-aos="fade-up" />
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 p-3">
          <Carou partenaireData={partenaireData} />
        </div>
      </div>
      <Actualities ActualitiesData={ActualitiesData} />
      <RecentActivities RecentActivitiesData={RecentActivitiesData} />
      <Footer FooterData={FooterData} />
    </>
  );
};

//
//   { const Home = useSpring({opacity: 1, from: {opacity: 0}}) return <animated.div style={props}>I will fade in</animated.div> }

export default Home;
/** Choses a importer !! 
menu navbar!
*/

// ()   []  { }    `` #
