import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Navbar.css";
import "../../img/Img.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faMapMarkerAlt,
  faStore,
  faBell
} from "@fortawesome/free-solid-svg-icons";
/*import { faAddressCard as FasAddressCard } from "@fortawesome/free-regular-svg-icons";*/

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
              <FontAwesomeIcon className="homeIcon" icon={faHome} />
              <NavLink to="/Home">עמוד הבית</NavLink>
              <FontAwesomeIcon className="userIcon" icon={faUser} />
              <NavLink to="/Myprofile">אזור אישי</NavLink>
              <FontAwesomeIcon className="LocationIcon" icon={faMapMarkerAlt} />
              <NavLink to="/Live">LIVE</NavLink>
              <FontAwesomeIcon className="StoreIcon" icon={faStore} />
              <NavLink to="/Store">חנות</NavLink>
              <FontAwesomeIcon className="BellIcon" icon={faBell} />
              <NavLink to="/Notifications">עדכונים</NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
