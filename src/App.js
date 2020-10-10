import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

import Counter from "./mycomponents/counter";
import Home from "./mycomponents/home";
import About from "./mycomponents/about";

import { Gallery, NewClass } from "./mycomponents/gallery";

//import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

// { }
// <nav className="navbar navbar-expand navbar-brand m-2">
// navbar - expand : afficher le menu en l"horizontal
// navbar-brand : taille la plice

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-brand m-2">
        <ul className="navbar-nav">
          <li>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/counter">
              counter
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/gallery">
              NewComponent
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/counter" component={Counter}></Route>
        <Route path="/about" component={About}></Route>

        <Route path="/gallery" component={NewClass}></Route>

        <Route path="/gallery" component={Gallery}></Route>
      </Switch>
    </Router>
  );
}
export default App;
