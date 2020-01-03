import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../css/Myprofile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faCalendarCheck,
  faListUl,
  faHeartbeat,
  faCog
} from "@fortawesome/free-solid-svg-icons";

class Myprofile extends Component {
  render() {
    return (
      <div className="Myprofile">
        <SecondNAV />
      </div>
    );
  }
}

const SecondNAV = props => (
  <div className="secNAV">
    <div className="Att">
      <FontAwesomeIcon className="muscleIcon" icon={faDumbbell} />
      <NavLink to="/Processing"> מדדים </NavLink>
      <FontAwesomeIcon className="CalendarCheck" icon={faCalendarCheck} />
      <NavLink to="/Subscription"> חידוש מנוי </NavLink>
      <FontAwesomeIcon className="ListUL" icon={faListUl} />
      <NavLink to="/TrainingPlan"> תוכנית אימונים </NavLink>
      <FontAwesomeIcon className="Heartbeat" icon={faHeartbeat} />
      <NavLink to="/Health">הצהרת בריאות</NavLink>
      <FontAwesomeIcon className="Settings" icon={faCog} />
      <NavLink to="/UserSettings">הגדרות</NavLink>
    </div>
  </div>
);

export default Myprofile;
