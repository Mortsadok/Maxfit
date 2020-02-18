import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Navbar.css";
import "../../img/Img.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faMapMarkerAlt,
  faStore,
  faBell,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
// Redux
import { connect } from "react-redux";

const Navbar = ({ user, get_updates }) => {
  const [Notifications, setNotification] = useState([]);
  useEffect(() => {
    setNotification(get_updates.filter(update => update.readMessage !== true));
  }, [get_updates]);
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

          <span>
            <button className="Notifications-att">
              <FontAwesomeIcon icon={faBell} />
            </button>
            <div className="Quantity">{Notifications.length}</div>
          </span>

          <div className="accountName">{Name}</div>

          <Link to="/">
            <button className="SignOut">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  user: PropTypes.object
};
const mapStateToProps = state => ({
  user: state.authReducer.user,
  get_updates: state.updatesReducer.get_updates
});
export default connect(mapStateToProps)(Navbar);
