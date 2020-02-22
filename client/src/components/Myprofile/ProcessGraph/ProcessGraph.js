import React, { Fragment } from "react";
import Navbar from "../../Navbar/Navbar";
import "./ProcessGraph.css";

const ProcessGraph = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="ProcessGraphBox">
        <div className="Inside_ProcessGraphBox">
          <div className="Headline">
            <p className="font-weight-light">סטטיסטיקת מדדים</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProcessGraph;
