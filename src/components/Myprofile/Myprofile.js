import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Myprofile.css";

class Myprofile extends Component {
  render() {
    return (
      <div className="Myprofile">
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
      <NavLink to="/Home"> מדדים </NavLink>
      <NavLink to="/Myprofile">אימון אישי</NavLink>
      <NavLink to="/Live"> חידוש מנוי </NavLink>
      <NavLink to="/Live"> תוכנית אימונים </NavLink>
      <NavLink to="/Store">הצהרת בריאות</NavLink>
      <NavLink to="/Notifications">הגדרות</NavLink>
    </div>
  </div>
);

export default Myprofile;
