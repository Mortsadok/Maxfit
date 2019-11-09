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
    <div className="Inside_LiveStore">
      <p class="font-weight-light">מתאמנים בזמן אמת</p>
      <div className="Time-content">
        <div className="Time">11:45</div>
        <div className="Inside">
          <h1 className="countExmple">23</h1>
        </div>
        <div className="Date">9/11/19</div>
      </div>
    </div>
  </div>
);

export default Live;
