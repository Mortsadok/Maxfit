import React, { Component } from "react";
import "../../../css/Myprofile.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import Col from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SecNav from "../SecNav";

class UserSettings extends Component {
  render() {
    return (
      <div className="UserSettings">
        <SecNav />
        <UnderNAV />
      </div>
    );
  }
}

const UnderNAV = props => (
  <div className="underNAV">
    <div className="Inside-box">
      <div className="Headline">
        <p className="font-weight-light">הגדרות</p>
        <div className="Setting-form">
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Header>פרטים אישיים</Card.Header>
            <Card.Body>
              <div className="SettingsHeadline">שם מלא:</div>
              <div className="SettingsInfo">מור צדוק</div>
              <div className="Settingsline">___________________________</div>
              <div className="SettingsHeadline">כתובת מייל:</div>
              <div className="SettingsInfo">Mortmanage@gmail.com</div>
            </Card.Body>
          </Card>

          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Header>שינוי סיסמא</Card.Header>
            <Card.Body>
              <Card.Text>
                {" "}
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Col sm="10">
                    <Form.Control type="password" placeholder="סיסמא ישנה" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Col sm="10">
                    <Form.Control type="password" placeholder="סיסמא חדשה" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Col sm="10">
                    <Form.Control
                      type="password"
                      placeholder="אימות סיסמא חדשה"
                    />
                  </Col>
                </Form.Group>
                <Form>
                  <Button variant="outline-success" type="submit">
                    שנה סיסמא
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Header>שינוי דואר אלקטרוני</Card.Header>
            <Card.Body>
              <Card.Text>
                {" "}
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Col sm="10">
                    <Form.Control
                      type="password"
                      placeholder="דואר אלקטרוני חדש"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Col sm="10">
                    <Form.Control
                      type="password"
                      placeholder="אימות דואר אלקטרוני"
                    />
                  </Col>
                </Form.Group>
                <div className="mailbtn">
                  <Form>
                    <Button variant="outline-success" type="submit">
                      שנה דואר אלקטרוני
                    </Button>
                  </Form>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
export default UserSettings;
