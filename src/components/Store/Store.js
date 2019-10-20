import React, { Component } from "react";

class Store extends Component {
  render() {
    return (
      <div className="Store">
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

export default Store;
