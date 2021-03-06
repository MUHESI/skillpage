import React, { ReactDOM } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Carousel from "react-elastic-carousel";
import styled, { css } from "styled-components/macro";

// style={{ "background-color": "#1B4164" }}

const Item = styled.div`
  img {
    display: block;

    /* max-height:  10%; */
    max-width: 400px;
    max-height: 400px;
    background: transparent;
    object-fit: cover;
  }
  div {
    background-image: linear-gradient(#121e58, rgba(0, 0, 0, 1));
    padding: 1px;
    margin-top: 0;
    text-align: center;
    transition: 1.5s;
  }
  h2 {
    color: #ffd103;
    font-weight: Bold;
    margin: 0;
    font-size: 1em;
    transition: 1.5s;
  }
  h2:hover {
    transition: 1s;
    font-size: 1.5em;
  }
  h3 {
    color: white;
    font-weight: normal;
    font-size: 0.8em;
  }
  margin: 2px 10px 0 10px; /*margin:0 5px 0 5px; >>means 0:top 5px:right 0:bottun 5px: left*/
  justify-content: center;
  align-items: center;
`;

const SectionCarou = styled.div`
  background: #dbdbdb;
  font-size: 1em;
  h1 {
    font-size: 1.2em;
    color: #121e58;
    padding-left: 15px;
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 300, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

/**
 * 
   { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 4 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
 */
const CarouselCoordination = ({ Coordination }) => {
  const CoordinationData = Coordination.CoordinationData;
  const title = Coordination.title;

  return (
    <SectionCarou>
      <h1>{title} </h1>
      <Carousel breakPoints={breakPoints}>
        {CoordinationData.map((item, index) => (
          <div>
            <Item key={index}>
              <img
                className=""
                src={item.img}
                tilte={item.nom}
                alt={item.nom}
              />
              <div data-aos="fade-left">
                <h2> {item.nom} </h2>
                <h3>{item.fonction} </h3>
              </div>
            </Item>
          </div>
        ))}
      </Carousel>
    </SectionCarou>
  );
};
export default CarouselCoordination;
