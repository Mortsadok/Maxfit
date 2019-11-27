import React, { Component } from "react";
import "./Notifications.css";
import Toast from "react-bootstrap/Toast";

class Notifications extends Component {
  render() {
    return (
      <div className="Notifications">
        <div className="NotificationsCenter">
          <NotificationsBox1 />
          <NotificationsBox2 />
        </div>
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
        <strong className="mr-auto">מנהל חדר הכושר</strong>
      </Toast.Header>
      <Toast.Body>.הודעה חדשה ממנהל חדר הכושר</Toast.Body>
    </Toast>
  </div>
);

const NotificationsBox2 = props => (
  <div className="NotificationsBox2">
    <p className="font-weight-light">שעות פתיחה</p>
    <div className="OpenHours">
      <div className="li-att ">ראשון - חמישי</div>
      <li className="font-weight-light">22:00 - 9:00</li>

      <div className="Main-Padding"></div>
      <div className="Line"></div>

      <div className="li-att ">שישי</div>
      <li className="font-weight-light">15:00 - 9:00</li>

      <div className="Main-Padding"></div>
      <div className="Line"></div>

      <div className="li-att ">שבת</div>
      <li className="font-weight-light">22:00 - 8:00</li>
    </div>
  </div>
);

export default Notifications;
