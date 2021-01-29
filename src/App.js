import React, { useState } from "react";
import "./bootstrap.min.css";
import "./App.css";
import "./styleBloc.css";
// Arrangement des pages
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import Home from "./pages";
import LeCres from "./pages/LeCres";

//import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Card from "./component/Card";
//import { useSpring, animated } from "react-spring";

// ()   []  { }    ``
/*  const text = styled.p( ["color: red;"] )
const text = styled.p`
  color: red;
`; 
 
*/

function App() {
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
      </Switch>
    </Router>
  );
}

export default App;
