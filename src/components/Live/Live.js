import React, { Component } from "react";
import "./Live.css";

class Live extends Component {
  render() {
    return (
      <div className="Live">
        <LiveCenter />
      </div>
    );
  }
}

const LiveCenter = props => (
  <div className="LiveCenter">
    <h2 className="underLine">מתאמנים בזמן אמת:</h2>
    <div className="Inside">
      <h1 className="countExmple">23</h1>
    </div>
  </div>
);

export default Live;
