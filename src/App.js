import React, { useState, useEffect } from "react";
import "./bootstrap.min.css";
import "./App.css";
import "./styleBloc.css";
import { Provider } from "react-redux";
import store from "./components/Store";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
// Arrangement des pages
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
// Pages
import Home from "./pages";
import LeCres from "./pages/LeCres";
import Innovations from "./pages/Innovations";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// adiministration pages
import HomeAdmin from "./pagesAdimin";
import SignUp from "./pagesAdimin/signUp";
import SignIn from "./pagesAdimin/signIn";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [IsOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!IsOpen);
  };
  //

  return (
    <Provider store={store}>
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown IsOpen={IsOpen} toggle={toggle} />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/LeCres" component={LeCres}></Route>
          <Route path="/innovations" component={Innovations}></Route>
          {/* Partie Administration */}
          <Route path="/index" component={HomeAdmin}></Route>
          <Route path="/signUp" component={SignUp}></Route>
          <Route path="/signIn" component={SignIn}></Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
