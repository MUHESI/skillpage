import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import Aos from "aos";

/*import { IoMdArrowForward } from "react-icons/io";

/*import { IoMdArrowForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Button } from "./Button";
*/
// Aos cest pour les annimations
// ()   []  { }    `` #
/*
const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;
const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; // centrer par rapport a x
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;

    background: linear-gradient(
      0deg rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  object-fit: cover;
`;
//const HeroSlide = styled.div``;
const HeroContent = styled.div`
  background-image: linear-gradient(#121e58, rgba(0, 0, 0, 1));
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% -100px);
  color: #fff;
  padding: 10px;
  opacity: 0.7;
  border-radius: 10px;

  h1 {
    font-size: clamp(1rem, 4vw, 2rem);
    font-weight: 400;
    //text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }
  h3 {
    font-size: clamp(1rem, 2vw, 2rem);
    color: red;
    font-weight: 400;
    //text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 400;
    font-weight: normal;
    //text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    margin-bottom: 0.8rem;
  }
`;
const Arrow = styled(IoMdArrowForward)`
  margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;

  overflow: hidden;
`;

const arrowButtons = css`
  width: 20px;
  height: 20px;
  color: #121e58;
  cursor: pointer;
  background-image: linear-gradient(red, rgba(0, 2, 0, 0.5));
  border: 1px solid #121e58;
  border-radius: 15px;
  padding: 3px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: none;
    color: white;
    background: #121e58;
    border: 0;

    border-radius: 0px;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

/*
  --bgPrimary: #121e58;
  --colYellow: #d9be1b;
  --colLiknHover: red;
  --colWhite: white;
  --sectionTitleImg: "%PUBLIC_URL%/img/sectionTitle.PNG";
  */
const bgPrimary = "#121e58";

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
    margin: 15px;
    font-size: 18px;
    width: 75%;
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
    color: black;
  }
  p {
    color: ${bgPrimary};
    font-size: 15px;
  }
`;

const SectionInit = styled.div`
  margin-top: 40px;
  padding: 20px;
`;
const btnSelectProg = styled.button`
  display: flex;
  background-color: ${bgPrimary};
  color: red;
`;
const SectionDebut = styled.div`
  margin: 5px;
  h3 {
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    color: ${bgPrimary};
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
    background: ${bgPrimary};
    color: white;
    font-size: 12px;
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
  border: 1px solid ${bgPrimary};
  top: 0;
  left: 0;
  max-width: 5000;

  object-fit: cover;
`;

// ()   []  { }    `` #

const Programs = ({ programs }) => {
  const tabPrograms = programs.ListProgramsData;
  const tabIntro = programs.intro;
  const [value, setFindProject] = useState(1);
  const handleChange = (value) => {
    //alert(value);
    setFindProject(value - 1);
  };
  const tabIndexBouton = [{ id: 1 }, { id: 2 }, { id: 3 }];
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  /* FindProject = (op) => {
    let sign = op === "+" ? 1 : -1; // ici on affecte la valeur a "sign" selon la valeur de "op"
  
    let c = op - 1;
    this.setState({
      selectProjectShow: c,
    });
  };
   onClick={() => this.handleChange(3)}
  */
  // () [] {} `` #

  return (
    <SectionGlob data-aos="fade-left">
      <SectionIntroGlob>
        {tabIntro.map((element, index) => (
          <div key={index}>
            <h2>{element.title}</h2>
            <p>{element.body}</p>
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
                      <div>{project.description}</div>
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
