import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../../css/Myprofile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  faDumbbell,
  faPeopleCarry,
  faCalendarCheck,
  faListUl,
  faHeartbeat,
  faCog
} from "@fortawesome/free-solid-svg-icons";

class Subscription extends Component {
  render() {
    return (
      <div className="Subscription">
        <SecondNAV />
        <UnderNAV />
      </div>
    );
  }
}

const UnderNAV = props => (
  <div className="underNAV">
    <div className="Inside-box">
      <div className="Headline">
        <p class="font-weight-light">חידוש מנוי</p>
        <div className="SubscriptionMenu">
          <Card border="secondary" style={{ width: "50rem" }}>
            <Card.Header>פרטי חידוש מנוי:</Card.Header>
            <Card.Body>
              <h4>
                <Card.Text>סוג המנוי:</Card.Text>
              </h4>

              <h4>
                <Card.Text>תקופת מנוי:</Card.Text>
              </h4>

              <h4>
                <Card.Text>אמצעי תשלום:</Card.Text>
              </h4>

              <h4>
                <Card.Text>סה"כ לתשלום:</Card.Text>
              </h4>
              <Card.Text>
                <Form>
                  <Button variant="outline-success" type="submit">
                    חדש מנוי
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

const SecondNAV = props => (
  <div className="secNAV">
    <div className="Att">
      <FontAwesomeIcon className="muscleIcon" icon={faDumbbell} />
      <NavLink to="/Processing"> מדדים </NavLink>
      <FontAwesomeIcon className="HandsHelping" icon={faPeopleCarry} />
      <NavLink to="/Personaltraining">אימון אישי</NavLink>
      <FontAwesomeIcon className="CalendarCheck" icon={faCalendarCheck} />
      <NavLink to="/Subscription"> חידוש מנוי </NavLink>
      <FontAwesomeIcon className="ListUL" icon={faListUl} />
      <NavLink to="/TrainingPlan"> תוכנית אימונים </NavLink>
      <FontAwesomeIcon className="Heartbeat" icon={faHeartbeat} />
      <NavLink to="/Health">הצהרת בריאות</NavLink>
      <FontAwesomeIcon className="Settings" icon={faCog} />
      <NavLink to="/UserSettings">הגדרות</NavLink>
    </div>
  </div>
);

export default Subscription;
