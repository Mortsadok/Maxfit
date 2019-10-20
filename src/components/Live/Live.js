import React, { Component } from "react";

class Live extends Component {
  render() {
    return (
      <div className="Live">
        <txtcntr>
          <Box />
        </txtcntr>
      </div>
    );
  }
}

const Box = props => (
  <div className="Box-flex">
    <div className="box">
      <h1> </h1>
    </div>
  </div>
);

export default Live;
