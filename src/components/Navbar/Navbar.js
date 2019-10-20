import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Navbar.css";
import "../../img/Img.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav>
          <div className="nav">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="att">
              <NavLink to="/Home">עמוד הבית</NavLink>

              <NavLink to="/Myprofile">אזור אישי</NavLink>

              <NavLink to="/Live"> LIVE </NavLink>

              <NavLink to="/Store">חנות</NavLink>

              <NavLink to="/Notifications">עדכונים</NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
