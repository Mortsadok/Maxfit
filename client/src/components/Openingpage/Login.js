import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser as FasUser } from "@fortawesome/free-regular-svg-icons";
import "../../css/Openning.css";

const Login = ({ login }) => {
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
                  <input type="checkbox" onClick={() => setType(!typeState)} />

                  <input type="submit" name="Password" value="התחברות" />

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
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool
};

export default Login;
