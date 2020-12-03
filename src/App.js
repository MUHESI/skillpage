import React from "react";
import logo from "./logo.svg";
import "./bootstrap.min.css";
import "./App.css";
import "./style.css";

import Menu from "./menu/menu";
import Linkmenu from "./menu/linkmenu";
//import SectionTitle from "./sectionTitle/sectionTitle";
import { SectionTitle, ExpertiseDomaine } from "./sectionTitle/sectionTitle";
//import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

// { }
// <nav className="navbar navbar-expand navbar-brand m-2">
// navbar - expand : afficher le menu en l"horizontal
// navbar-brand : taille la plice

function App() {
  return (
    <div>
      <Linkmenu />
      <Menu />
      <div className="container-fluid">
        <SectionTitle />
        <ExpertiseDomaine />

        <div className="row backg-primary">
          <div class="col-sm-12 col-md-4 col-lg-4">
            <h3>Projets</h3>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <h3></h3>
          </div>
          <div class="col-sm-12 col-md-3 col-lg-3">
            <h3>Actualités & Events</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
