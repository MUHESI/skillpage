import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

/*
import {
  SectionGlob,
  SectionIntroGlob,
  ProgramBtn,
  SectionInit,
  btnSelectProg,
  SectionDebut,
  SectionTextProg,
  sectionImg,
  ProgramImg,
} from "../styledComponets/styledPrograms";
*/

const colorPrimary = "#121e58";
const sizeDiv = 12;
const SectionGlob = styled.div``;
const ProgramBtn = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const SectionIntroGlob = styled.div`
  div {
    margin-left: 25px;
    font-size: 18px;
    text-align: justify;
    width: 70%;
  }
  h2 {
    font-size: 25px;
    font-weight: bold;
    color: black;
  }
  p {
    color: ${colorPrimary};
    font-size: 0.9em;
  }
`;

const SectionInit = styled.div`
  margin-top: 40px;
  padding: 20px;
`;
const btnSelectProg = styled.button`
  display: flex;
  background-color: ${colorPrimary};
  color: red;
`;
const SectionDebut = styled.div`
  margin: 5px;
  h3 {
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    color: ${sizeDiv};
    transition: 1.5s;
  }
  h3:hover {
    transition: 1.5s;
    font-size: 1.8em;
    color: ${sizeDiv};
  }
`;
const SectionTextProg = styled.div`
  position: absolute;
  z-index: 5;
  //left: 50px;  bottom: 300px;  width: 500px;
  left: 70px;
  top: -5px;
  padding: 10px;
  div {
    background: ${colorPrimary};
    color: white;
    font-size: ${sizeDiv}px;
    padding: 10px;
    font-weight: none;
  }
`;
const sectionImg = styled.div`
  z-index: 1;
  bottom: 0;
  margin-top: 100px;
`;
const ProgramImg = styled.img`
  border: 1px solid ${colorPrimary};
  top: 0;
  left: 0;
  max-width: 5000;
  object-fit: cover;
`;

const Programs = ({ programs }) => {
  const tabPrograms = programs.ListProgramsData;
  const tabIntro = programs.intro;
  const [value, setFindProject] = useState(1);
  const handleChange = (value) => {
    setFindProject(value - 1);
  };
  const tabIndexBouton = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <SectionGlob>
      <SectionIntroGlob data-aos="fade-right">
        {tabIntro.map((element, index) => (
          <div key={index}>
            <h2>{element.title}</h2>
            <p className="p-3">{element.body}</p>
          </div>
        ))}
      </SectionIntroGlob>
      <ProgramBtn>
        {tabIndexBouton.map((element, index) => (
          <btnSelectProg
            key={index}
            onClick={() => handleChange(element.id)}
            className="btn btn-dark m-1"
          >
            {element.id}
          </btnSelectProg>
        ))}
      </ProgramBtn>

      <div>
        {tabPrograms.map((project, index) => (
          <div>
            {index == value ? (
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <SectionDebut>
                    <h3>{project.title}</h3>
                  </SectionDebut>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <SectionInit>
                    <SectionTextProg>
                      <div data-aos="flip-left">{project.description}</div>
                    </SectionTextProg>
                    <sectionImg className="img-card">
                      <ProgramImg className="img-fluid" src={project.img} />
                    </sectionImg>
                  </SectionInit>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
        ;
      </div>
    </SectionGlob>
  );
};

export default Programs;
