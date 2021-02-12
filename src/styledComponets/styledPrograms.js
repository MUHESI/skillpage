import styled from "styled-components";
import {
  colorPrimary,
  fontSizeRef,
  SizetitleOne,
  SizetitleTwo,
  sizeDiv,
} from "../data/constCssData";

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
    color: ${colorPrimary};
    font-size: ${colorPrimary};
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
    font-size: 25px;
    font-weight: bold;
    text-align: center;
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
export default {
  SectionGlob,
  SectionIntroGlob,
  ProgramBtn,
  SectionInit,
  btnSelectProg,
  SectionDebut,
  SectionTextProg,
  sectionImg,
  ProgramImg,
};
