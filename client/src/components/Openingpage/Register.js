import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard as FasAddressCard } from "@fortawesome/free-regular-svg-icons";
import { Row, Form, Col, FormGroup, Label, Input } from "reactstrap";
// Redux
import { connect } from "react-redux";
import { register } from "../../actions/authActions";

import "../../css/Openning.css";
const Register = ({ register }) => {
  // useState
  const [Data, setData] = useState({
    Email: "",
    Password: "",
    Name: "",
    rePassword: ""
  });
  const { Email, Password, rePassword, Name } = Data;
  const [typeState, setType] = useState(false);
  const onChange = e => setData({ ...Data, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (Password !== rePassword) {
      console.log("password dont match");
    } else {
      register(Name, Email, Password);
    }
  };
  const resetForm = () => {
    setData({ ...Data, Email: "", Password: "", rePassword: "", Name: "" });
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
                        <Label>דואר אלקטרוני</Label>
                        <Input
                          type="email"
                          name="Email"
                          value={Email}
                          onChange={e => onChange(e)}
                          placeholder="דואר אלקטרוני"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>סיסמה</Label>
                        <Input
                          type="password"
                          name="Password"
                          value={Password}
                          onChange={e => onChange(e)}
                          placeholder="סיסמה"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label>שם מלא</Label>
                        <Input
                          type="text"
                          name="Name"
                          onChange={e => onChange(e)}
                          value={Name}
                          placeholder="שם מלא"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label>אימות סיסמה</Label>
                        <Input
                          type="password"
                          name="rePassword"
                          value={rePassword}
                          onChange={e => onChange(e)}
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
  isAuth: PropTypes.bool,
  register: PropTypes.func.isRequired
};

export default connect(null, { register })(Register);
