import React, { useEffect } from "react";
import styled, { css } from "styled-components/macro";

const DivMission = styled.div`
  text-align: justify;
  padding-left: 5px;
  font-weight: none;
`;
const Aboutus = ({ WeAre, Vision, Mission, ImgAbout }) => {
  return (
    <div className="bloc bloc-primary">
      <div className="row m-1">
        <div class="col-sm-8 col-md-4 col-lg-4">
          <div className="">
            <div className="tilte">
              <h2>A propos de nous</h2>
            </div>
            <div className="img-card">
              <img
                className="img-fluid br-rect-white  br-circle-15"
                src={ImgAbout}
              />
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-8 col-lg-8" data-aos="fade-left">
          <div className="p-2">
            <div className="tilte">
              <h2>
                <span className="">Qui sommes-nous ?</span>
              </h2>
            </div>
            {/* <DivMission className="">{}</DivMission> */}
          </div>
          <div className="p-2">
            <div>
              <div className="tilte">
                <h2>
                  <span className="m-1">Notre vision</span>
                </h2>
              </div>
              <DivMission className="">{Vision}</DivMission>
            </div>

            <div>
              <div className="tilte">
                <h2>
                  <span className="">Notre Mission</span>
                </h2>
              </div>
              <DivMission className="">{Mission}</DivMission>
            </div>
          </div>
          <div className="br-buttom  m-1 "></div>
          <div className="text-left">
            <button className="btn btn-colorWhite">Lire plus</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
