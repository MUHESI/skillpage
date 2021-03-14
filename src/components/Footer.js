import React from "react";
import { Link } from "react-router-dom";
const Footer = ({ FooterData }) => {
  const CRES = FooterData.CRES;
  const programmes = FooterData.programmes;
  const organisation = FooterData.organisation;

  return (
    <div className="bloc bloc-primary">
      <div className="tilte text-center">
        <h2>
          CENTRE DE <span className="br-buttom">RECHERCHE ET D'EXPERTISES</span>{" "}
          SCIENTIFIQUES
        </h2>
      </div>
      <div className="row">
        <div class="col-sm-6 col-md-3 col-lg-3 br-right p-4">
          <h2>LE CRES</h2>
          <ul className="None-decoration">
            {CRES.map((elt, v) => (
              <li>{elt.element} </li>
            ))}

            <Link className="" to="/SignUp">
              Connexion
            </Link>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 br-right p-4">
          <h2>PROGRAMMES</h2>
          <ul className="None-decoration">
            {programmes.map((elt, v) => (
              <li>{elt.element} </li>
            ))}
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 br-right p-4">
          <h2>ORGANISATION</h2>
          <ul className="None-decoration">
            {organisation.map((elt, v) => (
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
};
export default Footer;
