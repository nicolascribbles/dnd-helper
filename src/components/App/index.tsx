import React, { useEffect, useState, useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

import "../css/style.css";

import Navigation from "./nav"
import Home from "./home"
import About from "./about"

const App: React.FC = () => {
  const [navClassList, setNavClassList] = useState("l-navbar");
  const [toggleClassList, setToggleClassList] = useState("bx bx-menu");
  const [menuOpen, setMenuOpen] = useState(false);
  
  
  return (
    <Router>
      <div  className={ menuOpen ? "body-pd" : "" }>
        <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="height-100">
          <Switch>
            <Route path="/" exact={true} >
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
  }
export default App;