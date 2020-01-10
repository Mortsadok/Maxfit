import React, { Component } from "react";
import PropTypes from "prop-types";
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
// Redux
import { connect } from "react-redux";

const Navbar = ({ user }) => {
  const { Name } = user;
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
          <div className="accountName">{Name}</div>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  user: PropTypes.object
};
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(mapStateToProps)(Navbar);
