import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../css/Myprofile.css";
import { Form, Row, Col, Button } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faCalendarCheck,
  faListUl,
  faHeartbeat,
  faCog
} from "@fortawesome/free-solid-svg-icons";
// Redux
import { connect } from "react-redux";
import { setHealthDetails } from "../../../actions/healthAction";
const Health = ({ setHealthDetails }) => {
  const onChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    setHealthDetails(firstName, lastName, documentInfo);
  };
  const [data, setData] = useState({
    firstName: "",
    lastName: ""
  });
  const { firstName, lastName } = data;
  const documentInfo =
    "הנני החתום מטה מצהיר/ה בזאת שעל פי מיטב ידעתי אני בריא/ה ואין לי כל מגבלה רפואית המונעלת את השתתפותי בחדר הכושר והנני כשיר/ה להשתתף בפעילות שיעורי הסטודיו. אני מודע למגבלות הרפואיות במידה וידועה לי בעיה רפואית כלשהי הנני מתחייב/ת להביא אישור בנוסף להצהרת בריאות";
  return (
    <div className="Health">
      <SecondNAV />
      <UnderNAV
        documentInfo={documentInfo}
        firstName={firstName}
        lastName={lastName}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const UnderNAV = ({
  documentInfo,
  firstName,
  lastName,
  onChange,
  onSubmit
}) => (
  <div className="underNAV">
    <div className="Inside-box">
      <div className="Headline">
        <p className="font-weight-light">הצהרת בריאות</p>
      </div>
      <div className="HealthPolicy-content">
        <div className="HealthPolicy">{documentInfo}</div>
        <Form onSubmit={onSubmit}>
          <div className="Form-content">
            <Row>
              <Col>
                <Form.Control
                  name="firstName"
                  value={firstName}
                  placeholder="שם פרטי"
                  onChange={e => onChange(e)}
                />
              </Col>
              <Col>
                <Form.Control
                  name="lastName"
                  value={lastName}
                  placeholder="שם משפחה"
                  onChange={e => onChange(e)}
                />
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
export default connect(null, { setHealthDetails })(Health);
