import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../../css/Myprofile.css";

class UserSettings extends Component {
  render() {
    return (
      <div className="UserSettings">
        <SecondNAV />
        <UnderNAV />
      </div>
    );
  }
}

const UnderNAV = props => <div className="underNAV"></div>;
const SecondNAV = props => (
  <div className="secNAV">
    <div className="Att">
      <NavLink to="/Processing"> מדדים </NavLink>
      <NavLink to="/Personaltraining">אימון אישי</NavLink>
      <NavLink to="/Subscription"> חידוש מנוי </NavLink>
      <NavLink to="/TrainingPlan"> תוכנית אימונים </NavLink>
      <NavLink to="/Health">הצהרת בריאות</NavLink>
      <NavLink to="/UserSettings">הגדרות</NavLink>
    </div>
  </div>
);
export default UserSettings;
