import React from "react";
import styled, { css } from "styled-components/macro";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { Button } from "./Button";
const colorPrimary = "#121e58;";

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

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;
const btnWrap = styled.div`
  text-align: center;
`;
const BecomeMember = () => {
  //  const RecentActivity = RecentActivitiesData.RecentActivity;
  //const lastActivities = RecentActivitiesData.lisRecentActivities;

  return (
    <div className=" text-center">
      <SectionGbl>
        <h1>Devenir Membre</h1>
        <div>
          Eplorer les avantages de devenir membre du CRES et xplorer les
          differents types de membre{" "}
        </div>
        <btnWrap>
          <Button
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
        </btnWrap>
      </SectionGbl>
    </div>
  );
};
export default BecomeMember;
