import React, { Component } from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import Articles from "../componentsMenu/articles";
import Cres from "../componentsMenu/cres";
import Innovations from "../componentsMenu/innovations";

import Opportinities from "../componentsMenu/opportunities";
import Search from "../componentsMenu/search";
import Signup from "../componentsMenu/signup";

import Counter from "../mycomponents/counter";
import Home from "../mycomponents/home";
import { Gallery, NewClass } from "../mycomponents/gallery";

// { }
//  []
class Menu extends Component {
  render() {
    return (
      <div className="back text-right">
        <Router>
          <nav className="navbar navbar-expand navbar-brand m-2">
            <ul className="navbar-nav">
              <li>
                <Link className="nav-link" to="/home">
                  ACCUEIL
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/articles">
                  ARTICLES
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/cres">
                  CRES
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/innovations">
                  INNOVATIONS
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/opportinities">
                  OPPORTUNITES
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/search">
                  SEARCH
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/signup">
                  S'INSCRIRE
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/articles" component={Articles}></Route>
            <Route path="/cres" component={Cres}></Route>

            <Route path="/innovations" component={Innovations}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/singup" component={Signup}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Menu;

class NewClasss extends Component {
  render() {
    return <div>I 'm other component newComponent !'</div>;
  }
}
export { Menu, NewClasss };
