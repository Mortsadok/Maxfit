import React, { Component } from "react";
import { Badge } from "react-bootstrap";
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
      <div className="Inside">
        <h1 className="countExmple">
          <Badge variant="dark">23</Badge>
        </h1>
      </div>
    </div>
  </div>
);

export default Live;
