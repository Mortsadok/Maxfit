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
    <p class="font-weight-light">מתאמנים בזמן אמת</p>
    <div className="Inside">
      <h1 className="countExmple">23</h1>
    </div>
  </div>
);

export default Live;
