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
      <div className="">
        <Router>
          <nav class="navbar navbar-expand-lg br-yellow backg-primary br-buttom ml-auto ">
            <a class="navbar-brand text-bold" href="#">
              CRES
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link className="nav-link" to="/home">
                    ACCUEIL <span class="sr-only">(current)</span>
                  </Link>
                </li>

                <li class="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    to="/articles"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    ARTICLES
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    to="/cres"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    CRES
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    to="/innovations"
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    INNOVATIONS
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/opportinities">
                    OPPORTUNITES
                  </Link>
                </li>

                <li class="nav-item">
                  <Link className="nav-link" to="/search">
                    SEARCH
                  </Link>
                </li>

                <li class="nav-item br-rect">
                  <Link className="nav-link" to="/signup">
                    S'INSCRIRE
                  </Link>
                </li>
              </ul>
            </div>
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
