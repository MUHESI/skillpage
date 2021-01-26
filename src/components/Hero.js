import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components/macro";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Button } from "./Button";

// ()   []  { }    `` #

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
// ()   []  { }    `` #
const Hero = ({ slides }) => {
  //gestion de  passation des slides
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  // cet useEffect gere les passation automatque des slides
  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    timeout.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]); // fin 00000000000000000000000000000000000000000

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  // condition permettant de passation
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.img} alt={slide.alt} />
                  <HeroContent>
                    <h3>{slide.categoryProject}</h3>
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <Button
                      to={slide.link}
                      primary="true"
                      css={`
                        max-width: 5px;
                      `}
                      primary="true"
                      round="true"
                      big="true"
                    >
                      Lire plus
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}

        <SliderButtons>
          <PrevArrow onClick={prevSlide} />

          <NextArrow onClick={nextSlide} />
        </SliderButtons>
        <Arrow></Arrow>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
