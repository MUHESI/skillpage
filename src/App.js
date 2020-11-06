import React from "react";
import logo from "./logo.svg";
import "./bootstrap.min.css";
import "./App.css";
import "./style.css";

import Menu from "./menu/menu";
import Linkmenu from "./menu/linkmenu";

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
    </div>
  );
}

export default App;
