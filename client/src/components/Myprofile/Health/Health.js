import React, { useState, Fragment } from "react";
import "../../../css/Myprofile.css";
import "../../../css/Alerts.css";
import { Form, Row, Col, Button } from "react-bootstrap/";
import Navbar from "../../Navbar/Navbar";
import Alert from "../../Layout/Alert";
import MobileNav from "../../Mobile/MobileNav";
import MediaQuery from "react-responsive";
// Redux
import { connect } from "react-redux";
import { setHealthDetails } from "../../../actions/healthAction";
import SecNav from "../SecNav";
const Health = ({ setHealthDetails }) => {
  const onChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    setHealthDetails(firstName, lastName, documentInfo);
    restForm();
  };
  const restForm = () => {
    setData({ ...data, firstName: "", lastName: "" });
  };
  const [data, setData] = useState({
    firstName: "",
    lastName: ""
  });
  const { firstName, lastName } = data;
  const documentInfo =
    "הנני החתום מטה מצהיר/ה בזאת שעל פי מיטב ידעתי אני בריא/ה ואין לי כל מגבלה רפואית המונעת את השתתפותי בחדר הכושר והנני כשיר/ה להשתתף בפעילות שיעורי הסטודיו. אני מודע למגבלות הרפואיות שלי, במידה וידועה לי בעיה רפואית כלשהי, הנני מתחייב/ת להביא אישור בנוסף להצהרת בריאות.";
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileNav />
        <SecNav />
        <MobileHealth
          documentInfo={documentInfo}
          firstName={firstName}
          lastName={lastName}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <div className="Health">
          <Navbar />
          <SecNav />
          <UnderNAV
            documentInfo={documentInfo}
            firstName={firstName}
            lastName={lastName}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
      </MediaQuery>
    </Fragment>
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
          <div className="HealthAlerts">
            <Alert />
          </div>
        </Form>
      </div>
    </div>
  </div>
);
const MobileHealth = ({
  documentInfo,
  firstName,
  lastName,
  onChange,
  onSubmit
}) => (
  <div className="Mobile">
    <div className="MobileHealth">
      <main className="main">
        <UnderNAV
          documentInfo={documentInfo}
          firstName={firstName}
          lastName={lastName}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </main>
    </div>
  </div>
);
export default connect(null, { setHealthDetails })(Health);
