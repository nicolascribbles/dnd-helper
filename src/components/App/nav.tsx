import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
interface ChildProps {
  menuOpen: any;
  setMenuOpen: any;
}
const Navigation: React.FC<ChildProps> = ({menuOpen, setMenuOpen}) => {
 return (
   <Router>
    <header className={ menuOpen ? "header body-pd" : "header" } id="header">
      <div className="header_toggle"> <i className={ menuOpen ? "bx bx-x" : "bx bx-menu" } id="header-toggle" onClick={() => setMenuOpen(!menuOpen)}></i> </div>
      <div className="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt="" /> </div>
    </header>
    <div className={ menuOpen ? "l-navbar show" : "l-navbar"} id="nav-bar">
      <nav className="nav">
        <div>
          <a href="#" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">DND Helper</span> </a>

          <div className="nav_list"> 
            <a href="#" className="nav_link active"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_name">Dashboard</span> </a>
            <a href="#" className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">Users</span> </a>
            <a href="#" className="nav_link"> <i className='bx bx-message-square-detail nav_icon'></i> <span className="nav_name">Messages</span> </a>
            <a href="#" className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> <span className="nav_name">Bookmark</span> </a>
            <a href="#" className="nav_link"> <i className='bx bx-folder nav_icon'></i> <span className="nav_name">Files</span> </a>
            <a href="#" className="nav_link"> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Stats</span> </a>
          </div>
        </div>
        <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </a>
      </nav>
    </div>
  </Router>
 )}
Navigation.defaultProps = {
  menuOpen: false,
  setMenuOpen: null
}
export default Navigation;