import React, { Profiler } from "react";
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
    <div className="m-3">
      <Counter value="Counter :" value={1} image="img/Profiler1.jpg" />
    </div>
  );
}

export default App;
