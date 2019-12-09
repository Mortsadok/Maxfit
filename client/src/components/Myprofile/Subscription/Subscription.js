import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../css/Myprofile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// Redux
import { connect } from "react-redux";
import { Nclient } from "../../../actions/NclientAction";

import {
  faDumbbell,
  faPeopleCarry,
  faCalendarCheck,
  faListUl,
  faHeartbeat,
  faCog
} from "@fortawesome/free-solid-svg-icons";

const Subscription = ({ Nclient }) => {
  // useState
  const [FormData, SetFormData] = useState({
    firstname: "eden",
    lastname: "elmalich",
    id: "123456789",
    phone: "0543241787",
    Type: "רגיל",
    Time: "חודש",
    Payment: "מזומן",
    Total: 0
  });
  const {
    firstname,
    lastname,
    id,
    phone,
    Type,
    Time,
    Payment,
    Total
  } = FormData;
  const SendClient = e => {
    e.preventDefault();
    Nclient(firstname, lastname, id, phone, Type, Time, Payment, Total);
  };
  return (
    <div className="Subscription">
      <SecondNAV />
      <UnderNAV SendClient={SendClient} />
    </div>
  );
};

const UnderNAV = ({ SendClient }) => (
  <div className="underNAV">
    <div className="Inside-box">
      <div className="Headline">
        <p class="font-weight-light">חידוש מנוי</p>
        <div className="SubscriptionMenu">
          <Card border="secondary" style={{ width: "50rem" }}>
            <Card.Body>
              <Card.Text>
                <Form.Label>סוג מנוי</Form.Label>
                {["radio"].map(type => (
                  <div key={`custom-inline-${type}`} className="mb-3">
                    <Form.Check
                      custom
                      inline
                      label="רגיל"
                      type={type}
                      id={`custom-inline-${type}-1`}
                    />
                    <Form.Check
                      custom
                      inline
                      label="סטודנט"
                      type={type}
                      id={`custom-inline-${type}-2`}
                    />
                  </div>
                ))}
              </Card.Text>
              <Card.Text>
                <Form.Label>תקופת מנוי</Form.Label>
                {["radio"].map(type => (
                  <div key={`custom-inline-${type}`} className="mb-3">
                    <Form.Check
                      custom
                      inline
                      label="חודש"
                      type={type}
                      id={`custom-inline-${type}-3`}
                    />
                    <Form.Check
                      custom
                      inline
                      label="שלושה חודשים"
                      type={type}
                      id={`custom-inline-${type}-4`}
                    />
                    <Form.Check
                      custom
                      inline
                      label="שנה"
                      type={type}
                      id={`custom-inline-${type}-5`}
                    />
                  </div>
                ))}
              </Card.Text>
              <Card.Text>
                <Form.Label>אמצעי תשלום</Form.Label>
                {["radio"].map(type => (
                  <div key={`custom-inline-${type}`} className="mb-3">
                    <Form.Check
                      custom
                      inline
                      label="אשראי"
                      type={type}
                      id={`custom-inline-${type}-6`}
                    />
                    <Form.Check
                      custom
                      inline
                      label="מזומן"
                      type={type}
                      id={`custom-inline-${type}-7`}
                    />
                  </div>
                ))}
              </Card.Text>
            </Card.Body>
            <div className="Sum">סה"כ לתשלום:</div>
            <Card.Footer>
              <Form>
                <Button
                  onClick={e => SendClient(e)}
                  variant="outline-success"
                  type="submit"
                >
                  חדש מנוי
                </Button>
              </Form>
            </Card.Footer>
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

export default connect(null, { Nclient })(Subscription);
