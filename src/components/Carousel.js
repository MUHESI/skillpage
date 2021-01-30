import React, { ReactDOM } from "react";
import styled, { css } from "styled-components/macro";
import { IoMdArrowForward } from "react-icons/io";
import Carousel from "react-elastic-carousel";
//import Item from "../styledComponents/CarouselStyled";
// ()   []  {useEffect }
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100px;
  width: 100%;
  background: transparent;
  //background-image: linear-gradient(#121e58, rgba(0, 0, 0, 1));
  margin: 10px;
  font-size: 4em;
`;
const SectionGbl = styled.div`
  text-align: center;
  padding: 30px;
  margin: 10px;
  background-image: linear-gradient(#121e58, rgba(0.5, 0, 0, 1.3));

  border-radius: 10px;
  color: white;
  opacity: 0.7;

  h1 {
    font-size: 1.6rem;
  }
  div {
    font-size: 1rem;
    margin: 2px;
  }
`;

const arrowButtons = css`
  width: 25px;
  height: 25px;
  color: #121e58;
  cursor: pointer;

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

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 550, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

/**
 * 
   { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 4 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
 */
const Carou = ({ partenaireData }) => {
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        {partenaireData.map((partenaire, index) => (
          <Item key={index}>
            <h2></h2>

            <img
              className=""
              src={partenaire.img}
              tilte={partenaire.description}
              alt={partenaire.title}
            />
          </Item>
        ))}
      </Carousel>
    </>
  );
};
export default Carou;
/** Choses

*/
