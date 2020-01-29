import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Badge } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as FasUser } from "@fortawesome/free-regular-svg-icons";
import logo from "../../img/logo.png";
import "../../css/Openning.css";
import MediaQuery from "react-responsive";
import Alert from "../Layout/Alert";
// Redux
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

const Login = ({ login, isAuth }) => {
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
    login(Email, Password);
  };
  if (isAuth) {
    return <Redirect to="/Home" />;
  }

  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <LoginMobile
          Password={Password}
          onChange={onChange}
          setType={setType}
          typeState={typeState}
          onSubmit={onSubmit}
          Email={Email}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <div className="Pages-attributes">
          <main className="main">
            <div className="MainPage-container">
              <div className="MainPage-content ">
                <Card className="Card-size">
                  <Card.Header>התחברות</Card.Header>
                  <Card.Body>
                    <FontAwesomeIcon className="Main-Icon" icon={FasUser} />
                    <header className="Main-Title"> התחברות</header>

                    <form className="MainPage-Form" onSubmit={e => onSubmit(e)}>
                      <label>דואר אלקטרוני</label>
                      <input
                        type="text"
                        name="Email"
                        value={Email}
                        onChange={e => onChange(e)}
                        placeholder="דואר אלקטרוני"
                      />
                      <label>סיסמה</label>
                      <input
                        type={typeState ? "text" : "password"}
                        name="Password"
                        value={Password}
                        onChange={e => onChange(e)}
                        placeholder="סיסמה"
                      />
                      <label>הצג סיסמה</label>
                      <input
                        type="checkbox"
                        onClick={() => setType(!typeState)}
                      />

                      <input type="submit" name="Password" value="התחבר" />
                      <div className="Alert">
                        <Alert />
                      </div>
                      <div className="Button-content ">
                        <div className="LoginApp-text">
                          <Link to="/forgotPass">שכחת את הסיסמה?</Link>
                        </div>
                        <div className="LoginApp-text">
                          איך לך משתמש?
                          <span className="Link-Color">
                            <Link to="/Register" className="RegistarButton">
                              הירשם כעת
                            </Link>
                          </span>
                        </div>
                      </div>
                    </form>
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
const LoginMobile = ({
  Password,
  onChange,
  setType,
  typeState,
  Email,
  onSubmit
}) => (
  <div className="Mobile">
    <main className="main">
      <img id="logo" src={logo} alt={logo} />
      <header className="Mobile-Main-Title">
        <Badge pill variant="dark">
          התחברות
        </Badge>
      </header>
      <Card className="Card-size">
        <Card.Header>התחברות</Card.Header>
        <Card.Body>
          <FontAwesomeIcon className="Main-Icon" icon={FasUser} />
          <header className="Main-Title"> התחברות</header>

          <form className="MainPage-Form" onSubmit={e => onSubmit(e)}>
            <label>דואר אלקטרוני</label>
            <input
              type="text"
              name="Email"
              value={Email}
              onChange={e => onChange(e)}
              placeholder="דואר אלקטרוני"
            />
            <label>סיסמה</label>
            <input
              type={typeState ? "text" : "password"}
              name="Password"
              value={Password}
              onChange={e => onChange(e)}
              placeholder="סיסמה"
            />
            <div className="Checkbox-Flex">
              <label>הצג סיסמה</label>
              <input type="checkbox" onClick={() => setType(!typeState)} />
            </div>
            <input type="submit" name="Password" value="התחברות" />
            <div className="Alert">
              <Alert />
            </div>
            <div className="Button-content ">
              <div className="LoginApp-text">
                <Link to="/forgotPass">שכחת את הסיסמה?</Link>
              </div>
              <div className="LoginApp-text">
                איך לך משתמש?
                <span className="Link-Color">
                  <Link to="/Register" className="RegistarButton">
                    הירשם כעת
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </Card.Body>
      </Card>
    </main>
  </div>
);
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});
export default connect(mapStateToProps, { login })(Login);
