import React, { useEffect } from "react";
import Aos from "aos";
/** 
import Aos from "aos";

useEffect(() => {
  Aos.init({ durations: 2000 });
}, []);
  data-aos='fade-up'
   data-aos='fade-down'
   data-aos='fade-right'
     data-aos='fade-left'
       data-aos='flip-right'
        data-aos='flip-left'

  */
// ()   []  {useEffect }
const Aboutus = ({ WeAre, Vision, Mission, ImgAbout }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="bloc bloc-primary" data-aos="fade-right">
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
        <div class="col-sm-12 col-md-8 col-lg-8" data-aos="fade-up">
          <div className="p-2">
            <div className="tilte">
              <h2>
                <span className="">Qui sommes-nous</span>
              </h2>
            </div>
            <div className="body m-2">{WeAre}</div>
          </div>
          <div className="p-2">
            <div className="tilte">
              <h2>
                <span className="">Notre vision</span>
              </h2>
            </div>
            <div className="body m-2">{Vision}</div>
          </div>

          <div className="p-2">
            <div className="tilte">
              <h2>
                <span className="">Notre Mission</span>
              </h2>
            </div>
            <div className="body m-2">{Mission}</div>
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
