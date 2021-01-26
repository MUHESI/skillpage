import React, { Component } from "react";

// ()   []  { }
class Aboutus extends Component {
  render() {
    return (
      <div className="bloc bloc-primary">
        <div className="row m-2">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div className="">
              <div className="tilte">
                <h2>A propos de nous</h2>
              </div>
              <div className="img-card">
                <img
                  className="img-fluid br-rect-white  br-circle-15"
                  src="img/profile3.jpg"
                />
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div className="p-2">
              <div className="tilte">
                <h2>
                  <span className="">Qui sommes-nous</span>
                </h2>
              </div>
              <div className="body m-2">
                en hautes technologies et recherche scientifiques appliquéel en
                hautes technologies et recherche scientifiques appliquéelen
                hautes technologies et recherche scientifiques appliquéelen
                hautes technologies et recherche scientifiques appliquéel
              </div>
            </div>
            <div className="p-2">
              <div className="tilte">
                <h2>
                  <span className="">Notre vision</span>
                </h2>
              </div>
              <div className="body m-2">
                en hautes technologies et recherche scientifiques appliquéel en
                hautes technologies et recherche scientifiques appliquéelen
                hautes technologies et recherche scientifiques appliquéelen
                hautes technologies et recherche scientifiques appliquéel
              </div>
            </div>

            <div className="p-2">
              <div className="tilte">
                <h2>
                  <span className="">Notre Mission</span>
                </h2>
              </div>
              <div className="body m-2">
                Notre mision technologies et recherche scientifiques appliquéel
                en hautes technologies et recherche scientifiques appliquéelen
                hautes technologies et recherche scientifiques appliquéelen
                hautes technologies et recherche scientifiques appliquéel
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
  }
}
export default Aboutus;
