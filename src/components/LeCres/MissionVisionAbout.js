import React from "react";
import { createGlobalStyle } from "styled-components";
import styled, { css } from "styled-components/macro";

const SectionMission = styled.div`
  h2 {
    color: #1b4164;
    font-size: 1em;
    font-weight: bold;
  }
  p {
    padding: 10px;
    text-align: justify;
  }
`;

const MissionVisionAbout = ({ MISSION, VISION, OBJECTIFS, ImgBackground }) => {
  return (
    <SectionMission imgBack={ImgBackground}>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div>
            <h2>MISSION</h2>
            <p className="p-2"> {MISSION} </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div>
            <h2>VISION</h2>
            <p className="p-2"> {VISION} </p>
          </div>
        </div>
      </div>
      <div>
        <h2>OBJECTIFS</h2>
        <p className="p-2"> {OBJECTIFS} </p>
      </div>
      <div>
        <h2>Valeurs</h2>
        <p className="p-2"> </p>
      </div>
    </SectionMission>
  );
};

export default MissionVisionAbout;
