import React, { Fragment } from "react";
import Navbar from "../../Navbar/Navbar";
import "./BuildPlan.css";

const BuildPlan = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="BuildPlanBox">
        <div className="Inside_BuildBox">
          <div className="Headline">
            <p className="font-weight-light">תוכנית אימונים</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BuildPlan;
