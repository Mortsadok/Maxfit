import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Live.css";
import Navbar from "../Navbar/Navbar";

const Live = () => {
  return (
    <div className="Live">
      <Navbar />
      <LiveCenter />
    </div>
  );
};

const LiveCenter = props => (
  <div className="LiveCenter">
    <div className="Inside_LiveStore">
      <p className="font-weight-light">מתאמנים בזמן אמת</p>
      <div className="Time-content">
        <div className="Time2">
          <div className="Time1">
            <div className="Time">11:45</div>
          </div>
        </div>
        <Spinner animation="grow" size="la" />
        <div className="SpinnerClass">
          <div className="Inside2">
            <div className="Inside1">
              <div className="Inside">
                <h1 className="countExmple">23</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="Date2">
          <div className="Date1">
            <div className="Date">9/11/19</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Live;
