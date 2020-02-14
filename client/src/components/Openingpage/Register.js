import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Badge } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard as FasAddressCard } from "@fortawesome/free-regular-svg-icons";
import { Row, Form, Col, FormGroup, Label, Input } from "reactstrap";
import Alert from "../Layout/Alert";
import MediaQuery from "react-responsive";
import logo from "../../img/logo.png";
// Redux
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { setAlert } from "../../actions/alertAction";

import "../../css/Openning.css";
const Register = ({ register, isAuth, setAlert }) => {
  // useState
  const [redirectDelay, setRedirect] = useState(false);
  const [Data, setData] = useState({
    Email: "",
    Password: "",
    Name: "",
    rePassword: "",
    phone: "",
    clientId: ""
  });
  const { Email, Password, rePassword, Name, phone, clientId } = Data;
  const [typeState, setType] = useState(false);
  const onChange = e => setData({ ...Data, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (Password !== rePassword) {
      setAlert("סיסמאות לא תואמות", "danger");
    } else {
      register(Name, Email, Password, phone, clientId);
      resetForm();
      setTimeout(() => {
        setRedirect(true);
      }, 2000);
    }
  };
  const resetForm = () => {
    setData({
      ...Data,
      Email: "",
      Password: "",
      rePassword: "",
      Name: "",
      phone: "",
      clientId: ""
    });
  };
  if (isAuth && redirectDelay) {
    return <Redirect to="/Login" />;
  }
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <RegisterMobile
          Name={Name}
          rePassword={rePassword}
          onChange={onChange}
          setType={setType}
          onSubmit={onSubmit}
          Email={Email}
          typeState={typeState}
          Password={Password}
          phone={phone}
          clientId={clientId}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <div className="Pages-attributes">
          <main className="main">
            <div className="MainPage-container">
              <div className="MainPage-content ">
                <Card className="Card-size">
                  <Card.Header>הרשמה</Card.Header>
                  <Card.Body>
                    <FontAwesomeIcon
                      className="Main-Icon"
                      icon={FasAddressCard}
                    />
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
                      </Row>
                      <Row form>
                        <Col md={6}>
                          <FormGroup>
                            <Label>סיסמה</Label>
                            <Input
                              type={typeState ? "text" : "password"}
                              name="Password"
                              value={Password}
                              onChange={e => onChange(e)}
                              placeholder="סיסמה"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label>אימות סיסמה</Label>
                            <Input
                              type={typeState ? "text" : "password"}
                              name="rePassword"
                              value={rePassword}
                              onChange={e => onChange(e)}
                              placeholder="אימות סיסמה"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label>מספר פלאפון</Label>
                            <Input
                              type="text"
                              name="phone"
                              value={phone}
                              onChange={e => onChange(e)}
                              placeholder="מספר פלאפון"
                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label> תעודת זהות</Label>
                            <Input
                              type="text"
                              name="clientId"
                              value={clientId}
                              onChange={e => onChange(e)}
                              placeholder="תעודת זהות"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <div className="Register-Form-margin"></div>
                      <label>הצג סיסמה</label>
                      <input
                        type="checkbox"
                        onClick={() => setType(!typeState)}
                      />

                      <input type="submit" name="Password" value="הרשמה" />
                      <div className="Alert">
                        <Alert />
                      </div>
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
      </MediaQuery>
    </Fragment>
  );
};
const RegisterMobile = ({
  Name,
  rePassword,
  onChange,
  setType,
  typeState,
  onSubmit,
  Email,
  Password,
  phone,
  clientId
}) => (
  <div className="Mobile">
    <main className="main">
      <img id="logo" src={logo} alt={logo} />
      <header className="Mobile-Main-Title">
        <Badge pill variant="dark">
          הרשמה
        </Badge>
      </header>
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
                    type={typeState ? "text" : "password"}
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
                    type={typeState ? "text" : "password"}
                    name="rePassword"
                    value={rePassword}
                    onChange={e => onChange(e)}
                    placeholder="אימות סיסמה"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>מספר פלאפון</Label>
                  <Input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={e => onChange(e)}
                    placeholder="מספר פלאפון"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label> תעודת זהות</Label>
                  <Input
                    type="text"
                    name="clientId"
                    value={clientId}
                    onChange={e => onChange(e)}
                    placeholder="תעודת זהות"
                  />
                </FormGroup>
              </Col>
            </Row>
            <div className="Register-Form-margin"></div>
            <div className="Checkbox-Flex">
              <label>הצג סיסמה</label>
              <input type="checkbox" onClick={() => setType(!typeState)} />
            </div>
            <input type="submit" name="Password" value="הרשמה" />
            <div className="Alert">
              <Alert />
            </div>
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
    </main>
  </div>
);
Register.propTypes = {
  isAuth: PropTypes.bool,
  register: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});
export default connect(mapStateToProps, { register, setAlert })(Register);
