import React, { useState } from "react";
import "../../../css/Myprofile.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Form";
import Col from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SecNav from "../SecNav";
import Navbar from "../../Navbar/Navbar";
import Alert from "../../Layout/Alert";
import EmailForm from "./EmailForm";
// Redux
import { connect } from "react-redux";
import { settingsResetPassword } from "../../../actions/authActions";
import { setAlert } from "../../../actions/alertAction";

const UserSettings = ({ user, settingsResetPassword, setAlert }) => {
  const [data, setData] = useState({
    oldPassword: "",
    password: "",
    rePassword: ""
  });
  const { password, rePassword, oldPassword } = data;
  const { Name, email } = user;
  const onChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (password !== rePassword) {
      setAlert("סיסמאות לא תואמות", "danger");
    }
    settingsResetPassword(email, oldPassword, password);
    resetForm();
  };
  const resetForm = () => {
    setData({ ...data, oldPassword: "", password: "", rePassword: "" });
  };
  return (
    <div className="UserSettings">
      <Navbar />
      <SecNav />
      <UnderNAV
        Name={Name}
        email={email}
        password={password}
        rePassword={rePassword}
        oldPassword={oldPassword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const UnderNAV = ({
  Name,
  email,
  password,
  rePassword,
  onChange,
  oldPassword,
  onSubmit
}) => (
  <div className="underNAV">
    <div className="Inside-box">
      <div className="Headline">
        <p className="font-weight-light">הגדרות</p>
        <div className="Setting-form">
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Header>פרטים אישיים</Card.Header>
            <Card.Body>
              <div className="SettingsHeadline">שם מלא</div>
              <div className="SettingsInfo">{Name}</div>
              <div className="Settingsline">___________________________</div>
              <div className="SettingsHeadline">כתובת דואר אלקטרוני:</div>
              <div className="SettingsInfo">{email}</div>
            </Card.Body>
          </Card>

          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Header>שינוי סיסמא</Card.Header>
            <Card.Body>
              <Card.Text>
                {" "}
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Col sm="10">
                    <Form.Control
                      type="password"
                      name="oldPassword"
                      value={oldPassword}
                      onChange={e => onChange(e)}
                      placeholder="סיסמא ישנה"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Col sm="10">
                    <Form.Control
                      type="password"
                      name="password"
                      value={password}
                      onChange={e => onChange(e)}
                      placeholder="סיסמא חדשה"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Col sm="10">
                    <Form.Control
                      type="password"
                      name="rePassword"
                      value={rePassword}
                      onChange={e => onChange(e)}
                      placeholder="אימות סיסמא חדשה"
                    />
                  </Col>
                </Form.Group>
                <Form onSubmit={e => onSubmit(e)}>
                  <Button variant="outline-success" type="submit">
                    שנה סיסמא
                  </Button>
                  <div className="Alert">
                    <Alert />
                  </div>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
          <EmailForm />
        </div>
      </div>
    </div>
  </div>
);
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(mapStateToProps, {
  settingsResetPassword,
  setAlert
})(UserSettings);
