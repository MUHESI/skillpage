import React from "react";
import styled, { css } from "styled-components/macro";

const DivPartGlob = styled.div`
  text-align: justify;
  background-color: #121e58;
  color: white;
  padding: 10px;
  h1 {
    font-size: 2em;
  }
  div {
    font-size: 1em;
    padding: 15px;
  }
`;

const Partenaires = () => {
  //const RecentActivity = RecentActivitiesData.RecentActivity;

  return (
    <DivPartGlob>
      <h1>Nos partenaires</h1>

      <div className="body">
        Nous travaillons avec beacoup d'autres Nous travaillons avec beacoup
        d'autres Nous travaillons avec beacoup d'autres Nous travaillons avec
        beacoup d'autres
      </div>
    </DivPartGlob>
  );
};
export default Partenaires;
