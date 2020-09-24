import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.min.css";
//import Counter from "./components/counter";
import {
  Counter,
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

// { }
function App() {
  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
    </Router>
  );
}

export default App;
