import React, { useState, useEffect } from "react";
import "./bootstrap.min.css";
import "./App.css";
import "./styleBloc.css";
import Aos from "aos";
import "aos/dist/aos.css";
// Arrangement des pages
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import Home from "./pages";
import LeCres from "./pages/LeCres";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [IsOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Dropdown IsOpen={IsOpen} toggle={toggle} />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/LeCres" component={LeCres}></Route>
        <Route path="/innovations" component={LeCres}></Route>
      </Switch>
    </Router>
  );
};

export default App;
