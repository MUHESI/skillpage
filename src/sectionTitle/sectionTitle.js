import React, { Component } from "react";

class SectionTitle extends Component {
  render() {
    return (
      <div className="info info-A">
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
// ()   []  { }
class ExpertiseDomaine extends Component {
  state = {
    listDomExp1: [
      { id: 1, nom: "Accomgnement academiques et entrepreneurial" },
      { id: 2, nom: "Developpement des produits" },
      { id: 3, nom: "Encadrement des jeunes en science moderne" },
    ],

    listDomExp2: [
      {
        id: 1,
        nom:
          "Formation en hautes technologies et recherche scientifiques appliquéel",
      },
      { id: 2, nom: "Vulgarisation scientifique" },
      { id: 3, nom: "Genie conseil et support" },
    ],
    listMissionCres: [
      { id: 1, nom: "Accomgnement academiques et entrepreneurial" },
      { id: 2, nom: "Developpement des produits" },
      { id: 3, nom: "Encadrement des jeunes en science moderne" },
    ],
    listVisionCres: [
      {
        id: 1,
        nom:
          "Formation en hautes technologies et recherche scientifiques appliquée",
      },
      { id: 2, nom: "Vulgarisation scientifique" },
      { id: 3, nom: "Genie conseil et support" },
    ],
  };
  render() {
    return (
      <div className="bloc bloc-primary">
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
                  {this.state.listDomExp1.map((elt) => (
                    <li>{elt.nom} </li>
                  ))}
                </ul>
              </div>
              <div class="col-sm-6 col-md-6 col-lg-6">
                <ul>
                  {this.state.listDomExp2.map((elt) => (
                    <li>{elt.nom} </li>
                  ))}
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
                  {this.state.listMissionCres.map((elt) => (
                    <li>{elt.nom} </li>
                  ))}
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
                  {this.state.listVisionCres.map((elt) => (
                    <li>{elt.nom} </li>
                  ))}
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
