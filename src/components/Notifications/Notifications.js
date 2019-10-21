import React, { Component } from "react";
import "./Notifications.css";

class Notifications extends Component {
  render() {
    return (
      <div className="Notifications">
        <NotificationsBox />
      </div>
    );
  }
}

const NotificationsBox = props => <div className="NotificationsBox"></div>;

export default Notifications;
