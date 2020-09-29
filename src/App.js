import React, { Profiler } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";
import Counter from "./mycomponents/counter";
import Home from "./mycomponents/home";
import Gallery from "./mycomponents/gallery";

import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
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
              about
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/counter">
              counter
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/gallery">
              gallery
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container-fluid">
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/counter" component={Counter}></Route>
          <Route path="/gallery" component={Gallery}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
