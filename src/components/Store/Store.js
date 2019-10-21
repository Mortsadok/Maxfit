import React, { Component } from "react";
import "./Store.css";

class Store extends Component {
  render() {
    return (
      <div className="Store">
        <BoxStore />
      </div>
    );
  }
}

const BoxStore = props => <div className="boxStore"></div>;

export default Store;
