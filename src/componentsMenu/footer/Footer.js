import React, { Component } from "react";
class Footer extends Component {
  state = {
    CRES: [
      { id: 1, element: "Histoire" },
      { id: 2, element: "A propos" },
      { id: 3, element: "Association" },
      { id: 4, element: "Administration" },
      { id: 5, element: "FAQ" },
    ],

    programmes: [
      { id: 1, element: "Pamoja" },
      { id: 2, element: "Mchango" },
      { id: 3, element: "Formation" },
      { id: 4, element: "Entreneuriant" },
    ],
    organisation: [
      { id: 1, element: "Emploi" },
      { id: 2, element: "Carrière" },
      { id: 3, element: "Partenaires" },
      { id: 4, element: "Financement" },
      { id: 5, element: "Bourse d'études" },
    ],
  };
  render() {
    return (
      <div className="bloc bloc-primary">
        <div className="tilte text-center">
          <h2>
            CENTRE DE{" "}
            <span className="br-buttom">RECHERCHE ET D'EXPERTISES</span>{" "}
            SCIENTIFIQUES
          </h2>
        </div>
        <div className="row">
          <div class="col-sm-6 col-md-3 col-lg-3 br-right p-4">
            <h2>LE CRES</h2>
            <ul className="None-decoration">
              {this.state.CRES.map((elt, v) => (
                <li>{elt.element} </li>
              ))}
            </ul>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3 br-right p-4">
            <h2>PROGRAMMES</h2>
            <ul className="None-decoration">
              {this.state.programmes.map((elt, v) => (
                <li>{elt.element} </li>
              ))}
            </ul>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3 br-right p-4">
            <h2>ORGANISATION</h2>
            <ul className="None-decoration">
              {this.state.organisation.map((elt, v) => (
                <li>{elt.element} </li>
              ))}
            </ul>
          </div>

          <div class="col-sm-6 col-md-3 col-lg-3 br-right p-4">
            <h3>Plan site</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
