import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../css/Myprofile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import {
  faDumbbell,
  faCalendarCheck,
  faListUl,
  faHeartbeat,
  faCog
} from "@fortawesome/free-solid-svg-icons";
// Redux
import { connect } from "react-redux";
import { setProcessing } from "../../../actions/processingAction";

const Processing = ({ setProcessing }) => {
  const [getProccessing, setProcessingData] = useState({
    Weight: "",
    Chest: "",
    frontHand: "",
    backHand: ""
  });
  const { Weight, Chest, frontHand, backHand } = getProccessing;
  const onChange = e => {
    setProcessingData({ getProccessing, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    setProcessing(Weight, Chest, frontHand, backHand);
  };
  return (
    <div className="Processing">
      <SecondNAV />
      <UnderNAV
        Weight={Weight}
        Chest={Chest}
        frontHand={frontHand}
        backHand={backHand}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const UnderNAV = ({
  Weight,
  Chest,
  frontHand,
  backHand,
  onChange,
  onSubmit
}) => (
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
                      <Form.Control
                        name="Weight"
                        value={Weight}
                        placeholder="הכנס משקל"
                        onChange={e => onChange(e)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        name="Chest"
                        value={Chest}
                        placeholder="הכנס היקף חזה"
                        onChange={e => onChange(e)}
                      />
                    </Col>
                  </Form.Row>
                </Form>
              </Card.Text>
              <Card.Text>
                <Form>
                  <Form.Row>
                    <Col>
                      <Form.Control
                        name="frontHand"
                        value={frontHand}
                        placeholder="הכנס היקף יד קדמית"
                        onChange={e => onChange(e)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        name="backHand"
                        value={backHand}
                        placeholder="הכנס היקף יד אחורית"
                        onChange={e => onChange(e)}
                      />
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
export default connect(null, { setProcessing })(Processing);
