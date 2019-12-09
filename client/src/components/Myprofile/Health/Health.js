import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../../css/Myprofile.css";
import { Form, Row, Col, Button } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faPeopleCarry,
  faCalendarCheck,
  faListUl,
  faHeartbeat,
  faCog
} from "@fortawesome/free-solid-svg-icons";

class Health extends Component {
  render() {
    return (
      <div className="Health">
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
        <p class="font-weight-light">הצהרת בריאות</p>
      </div>
      <div className="HealthPolicy-content">
        <div className="HealthPolicy">
          הנני החתום מטה מצהיר/ה בזאת שעל פי מיטב ידעתי אני בריא/ה ואין לי כל
          מגבלה רפואית המונעת את השתתפותי בחדר הכושר והנני כשיר/ה להשתתף בפעילות
          שיעורי הסטודיו. אני מודע למגבלות הרפואיות שלי, במידה וידועה לי בעיה
          רפואית כלשהי, הנני מתחייב/ת להביא אישור רפואי בנוסף להצהרת הבריאות.
        </div>
        <Form>
          <div className="Form-content">
            <Row>
              <Col>
                <Form.Control placeholder="שם פרטי" />
              </Col>
              <Col>
                <Form.Control placeholder="שם משפחה" />
              </Col>
            </Row>
            <Button variant="outline-success" type="submit">
              שלח
            </Button>
          </div>
        </Form>
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
export default Health;
