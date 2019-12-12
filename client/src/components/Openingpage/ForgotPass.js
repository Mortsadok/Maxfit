import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import "../../css/Openning.css";

const ForgotPass = () => {
  // useState
  const [Data, SetData] = useState({
    Email: "",
    Password: "",
    rePassword: ""
  });
  const { Email, Password, rePassword } = Data;
  const [typeState, setType] = useState(false);
  const onChange = e => SetData({ ...Data, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="Openinig">
      <div className="Pages-attributes">
        <main className="main">
          <div className="MainPage-container">
            <div className="MainPage-content ">
              <Card className="Card-size">
                <Card.Header>איפוס סיסמה</Card.Header>
                <Card.Body>
                  <FontAwesomeIcon className="Main-Icon" icon={faUnlockAlt} />
                  <header className="Main-Title">איפוס סיסמה</header>

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
                    <label>אימות סיסמה</label>
                    <input
                      type={typeState ? "text" : "password"}
                      name="rePassword"
                      value={rePassword}
                      onChange={e => onChange(e)}
                      placeholder="אימות סיסמה"
                    />
                    <label>הצג סיסמאות</label>
                    <input
                      type="checkbox"
                      onClick={() => setType(!typeState)}
                    />

                    <input type="submit" name="Password" value="התחברות" />

                    <div className="Button-content ">
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
    </div>
  );
};

export default ForgotPass;
