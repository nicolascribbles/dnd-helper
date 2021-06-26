import React, { useEffect, useState, useContext } from "react";
import "../css/style.css";

import Navigation from "./nav"

const App: React.FC = () => {
  const [name, setName] = useState("Nicola");
  const [navClassList, setNavClassList] = useState("l-navbar");
  const [toggleClassList, setToggleClassList] = useState("bx bx-menu");
  const [menuOpen, setMenuOpen] = useState(false);
  
  
  return (
    <div className={ menuOpen ? "body-pd" : "" }>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="height-100">
        <h4 className="pt-3">Hello, {name}</h4>
        <div className="card" style={{width: '18rem'}}>
          <img className="card-img-top" src="#" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  );
  }
export default App;