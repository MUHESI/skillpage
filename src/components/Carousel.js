import React, { ReactDOM } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Carousel from "react-elastic-carousel";
import { Item } from "../styledComponets/couraselStyled";

// ()   []  {useEffect }

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
