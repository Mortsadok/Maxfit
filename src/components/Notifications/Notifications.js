import React, { Component } from "react";
import "./Notifications.css";
import Toast from "react-bootstrap/Toast";

class Notifications extends Component {
  state = {
    toast: true
  };
  onClick = () => {
    console.log(this.state.toast);
    this.setState({
      toast: false
    });
  };
  render() {
    return (
      <div className="Notifications">
        <NotificationsBox1 />
        <NotificationsBox2 />
      </div>
    );
  }
}

const NotificationsBox1 = props => (
  <div className="NotificationsBox1">
    <p class="font-weight-light">עדכונים</p>

    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">מור צדוק</strong>
        <small>לפני 11 דקות</small>
      </Toast.Header>
      <Toast.Body>.הודעה חדשה ממנהל חדר הכושר</Toast.Body>
    </Toast>
  </div>
);

const NotificationsBox2 = props => (
  <div className="NotificationsBox2">
    <p class="font-weight-light">שעות פתיחה</p>
  </div>
);

export default Notifications;
