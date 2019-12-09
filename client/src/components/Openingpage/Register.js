import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard as FasAddressCard } from "@fortawesome/free-regular-svg-icons";
import { Row, Form, Col, FormGroup, Label, Input } from "reactstrap";

import "../../css/Openning.css";
const Register = ({ login }) => {
  // useState
  const [Data, SetData] = useState({
    Email: "",
    Password: ""
  });
  const { Email, Password } = Data;
  const [typeState, setType] = useState(false);
  const onChange = e => SetData({ ...Data, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
  };

  return (
    <div className="Pages-attributes">
      <main className="main">
        <div className="MainPage-container">
          <div className="MainPage-content ">
            <Card className="Card-size">
              <Card.Header>הרשמה</Card.Header>
              <Card.Body>
                <FontAwesomeIcon className="Main-Icon" icon={FasAddressCard} />
                <header className="Main-Title"> הרשמה</header>

                <Form className="Register-Form" onSubmit={e => onSubmit(e)}>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">דואר אלקטרוני</Label>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="דואר אלקטרוני"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">סיסמה</Label>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="סיסמה"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail">שם מלא</Label>
                        <Input
                          type="email"
                          name="email"
                          id="exampleEmail"
                          placeholder="שם מלא"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">אימות סיסמה</Label>
                        <Input
                          type="password"
                          name="password"
                          id="examplePassword"
                          placeholder="אימות סיסמה"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <div className="Register-Form-margin"></div>
                  <label>הצג סיסמה</label>
                  <input type="checkbox" onClick={() => setType(!typeState)} />

                  <input type="submit" name="Password" value="הרשמה" />

                  <div className="Button-content ">
                    <div className="LoginApp-text">
                      <Link to="/forgotPass">שכחת את הסיסמה?</Link>
                    </div>
                    <div className="LoginApp-text">
                      משתמש קיים?
                      <span className="Link-Color">
                        <Link to="/Login" className="RegistarButton">
                          התחבר
                        </Link>
                      </span>
                    </div>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

Register.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool
};

export default Register;
