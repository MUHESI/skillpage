import React from "react";
import logo from "./logo.svg";
import "./bootstrap.min.css";
import "./App.css";
import "./styleBloc.css";

import Menu from "./menu/menu";
import Linkmenu from "./menu/linkmenu";
//import SectionTitle from "./sectionTitle/sectionTitle";
import { SectionTitle, ExpertiseDomaine } from "./sectionTitle/sectionTitle";
import { ArticlesImg, ArticlesVideo } from "./mycomponents/Articles";

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

        <div className="row">
          <div class="col-sm-12 col-md-8 col-lg-8">
            <h3>Projets</h3>
            <div className="row backg-light">
              <div class="col-sm-12 col-md-8 col-lg-8">
                <ArticlesImg />
              </div>

              <div class="col-sm-12 col-md-4 col-lg-4">
                <ArticlesVideo />
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-4 col-lg-4">
            <h3>Actualités & Events</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
