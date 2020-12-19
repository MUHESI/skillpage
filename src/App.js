import React from "react";
import logo from "./logo.svg";
import "./bootstrap.min.css";
import "./App.css";
import "./styleBloc.css";

import Menu from "./menu/menu";
import Linkmenu from "./menu/linkmenu";
//import SectionTitle from "./sectionTitle/sectionTitle";
import { SectionTitle, ExpertiseDomaine } from "./sectionTitle/sectionTitle";
import { ProjectsImg, ProjectsVideo } from "./mycomponents/Projects";
import Events from "./mycomponents/Events";
import { Articles, ArticlesMoreView } from "./mycomponents/Articles";
import MapProjects from "./mycomponents/MapProjects";
import Footer from "./componentsMenu/footer/Footer";

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

        <div className="row p-1">
          <div class="col-sm-12 col-md-8 col-lg-8 bloc-light p-2">
            <h3 className="text-bold">Projets</h3>

            <div className="row ">
              <div class="col-sm-12 col-md-8 col-lg-8">
                <ProjectsImg />
              </div>

              <div class="col-sm-12 col-md-4 col-lg-4">
                <ProjectsVideo />
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-4 col-lg-4">
            <div>
              <h3 className="text-bold">Actualités & Events</h3>
              <div className="text-right">
                <button className="btn btn-linkBlack" id="hoverTitle">
                  Voir Plus
                </button>
              </div>

              <Events />
            </div>
            <div className="bloc-light p-2">
              <h3 className="text-bold">Articles</h3>
              <div className="text-right">
                <button className="btn btn-linkBlack" id="hoverTitle">
                  Voir Tous
                </button>
              </div>
              <Articles />
              <h3 className="text-bold">Les Plus Vues</h3>
              <div className="text-right">
                <button className="btn btn-linkBlack" id="hoverTitle">
                  Voir Tous
                </button>
              </div>
              <ArticlesMoreView />
            </div>
          </div>
        </div>
        <div className="">
          <MapProjects />
        </div>
        <div className="">
          <img className="img-fluid" src="img/parteners.png" alt="partenrs" />
        </div>
      </div>

      <div className="br-rect">
        <Footer />
      </div>
    </div>
  );
}

export default App;
