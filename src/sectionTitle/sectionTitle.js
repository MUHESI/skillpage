import React, { Component } from "react";

class SectionTitle extends Component {
  render() {
    return (
      <div className="section-title">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6 marg-top-1">
            <div className="">
              <h2>Section Title</h2>
            </div>

            <div className="body">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
              <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
              <div>
                <button className="btn btn-colorPrimary">Action</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SectionTitle;

class ExpertiseDomaine extends Component {
  render() {
    return (
      <div className="divExpertiseDomaine backg-primary">
        <div className="row">
          <div class="col-sm-6 col-md-6 col-lg-6">
            <div className="tilte">
              <h2>
                <span className="br-buttom">DOMAINE DE RECHERCHE </span>ET
                D'EXPERTISE
              </h2>
            </div>
            <div className="row">
              <div class="col-sm-6 col-md-6 col-lg-6">
                <ul>
                  <li>Accomgnement academiques et entrepreneurial</li>
                  <li>Developpement des produits</li>
                  <li>Encadrement des jeunes en science moderne</li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-6">
                <ul>
                  <li>
                    Formation en hautes technologies et recherche scientifiques
                    appliquée
                  </li>
                  <li>Vulgarisation scientifique</li>
                  <li>Genie conseil et support</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 col-lg-6">
            <div className="tilte">
              <h2>
                <span className="br-buttom">A PROPOS DU</span> CRES
              </h2>
            </div>
            <div className="row">
              <div class="col-sm-6 col-md-6 col-lg-6">
                <h3>Mission</h3>
                <ul>
                  <li>Accomgnement academiques et entrepreneurial</li>
                  <li>Developpement des produits</li>
                  <li>Encadrement des jeunes en science moderne</li>
                </ul>
                <div className="">
                  <button className="btn btn-colorYellow">
                    Decouvrir le CRES >
                  </button>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-6">
                <h3>Vision</h3>

                <ul>
                  <li>
                    Formation en hautes technologies et recherche scientifiques
                    appliquée
                  </li>
                  <li>Vulgarisation scientifique</li>
                  <li>Genie conseil et support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export { SectionTitle, ExpertiseDomaine };
