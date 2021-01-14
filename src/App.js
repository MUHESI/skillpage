import React from "react";
import logo from "./logo.svg";
import "./bootstrap.min.css";
import "./App.css";
import "./styleBloc.css";

import Menu from "./menu/menu";
import Linkmenu from "./menu/linkmenu";
//import SectionTitle from "./sectionTitle/sectionTitle";

/* 
import { SectionTitle, ExpertiseDomaine } from "./sectionTitle/sectionTitle";
import { ProjectsImg, ProjectsVideo } from "./mycomponents/Projects";
import Events from "./mycomponents/Events";
import { Articles, ArticlesMoreView } from "./mycomponents/Articles";
import MapProjects from "./mycomponents/MapProjects";
*/
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

      <div className="br-rect">
        <Footer />
      </div>
    </div>
  );
}

export default App;
