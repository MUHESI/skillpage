import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";
import Counter from "./composant/counter";
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
      <div className="container">
        <Switch>
          <Route path="/home"></Route>
          <Route path="/about" component={Counter}></Route>
          <Route path="/gallery" component={Counter}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
