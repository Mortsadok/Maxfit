import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../../css/Myprofile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import {
  faDumbbell,
  faPeopleCarry,
  faCalendarCheck,
  faListUl,
  faHeartbeat,
  faCog
} from "@fortawesome/free-solid-svg-icons";

class Processing extends Component {
  render() {
    return (
      <div className="Processing">
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
        <p class="font-weight-light">עדכון מדדים</p>
        <div className="Processing-form">
          <Card border="secondary" style={{ width: "50rem" }}>
            <Card.Body>
              <Card.Text>
                <Form>
                  <Form.Row>
                    <Col>
                      <Form.Control placeholder="הכנס משקל" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="הכנס היקף חזה" />
                    </Col>
                  </Form.Row>
                </Form>
              </Card.Text>
              <Card.Text>
                <Form>
                  <Form.Row>
                    <Col>
                      <Form.Control placeholder="הכנס היקף יד קדמית" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="הכנס היקף יד אחורית" />
                    </Col>
                  </Form.Row>
                </Form>
              </Card.Text>
            </Card.Body>
            <Button variant="outline-success" type="submit">
              שלח מדדים
            </Button>
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
export default Processing;
