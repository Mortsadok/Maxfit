import React from "react";
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
const SecNav = () => {
  return (
    <div className="secNAV">
      <div className="Att">
        <NavLink to="/Processing">
          <FontAwesomeIcon className="muscleIcon" icon={faDumbbell} />
          מדדים
        </NavLink>
        <NavLink to="/Subscription">
          <FontAwesomeIcon className="CalendarCheck" icon={faCalendarCheck} />
          חידוש מנוי
        </NavLink>
        <NavLink to="/TrainingPlan">
          <FontAwesomeIcon className="ListUL" icon={faListUl} />
          תוכנית אימונים
        </NavLink>
        <NavLink to="/Health">
          <FontAwesomeIcon className="Heartbeat" icon={faHeartbeat} />
          הצהרת בריאות
        </NavLink>
        <NavLink to="/UserSettings">
          <FontAwesomeIcon className="Settings" icon={faCog} />
          הגדרות
        </NavLink>
      </div>
    </div>
  );
};
export default SecNav;
