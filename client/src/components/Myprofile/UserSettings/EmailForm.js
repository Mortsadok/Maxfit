import React, { useState } from "react";
import { Col, Form, Row, Button, Card } from "react-bootstrap";
import "../../../css/Myprofile.css";
import "../../../css/Alerts.css";
import Alert from "../../Layout/Alert";
// Redux
import { connect } from "react-redux";
import { resetEmail } from "../../../actions/resetEmailAction";
import { setAlert } from "../../../actions/alertAction";

const EmailForm = ({
  setAlert,
  user,
  successResetEmail,
  errorResetEmail,
  resetEmail
}) => {
  const { _id } = user;
  const [emailData, setEmailData] = useState({
    Email: "",
    reEmail: ""
  });
  const onChange = e => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };
  const { Email, reEmail } = emailData;
  const onSubmitEmail = e => {
    e.preventDefault();
    if (Email !== reEmail) {
      setAlert("דואר אלקטרוני לא תואם", "danger");
    }
    resetEmail(_id, Email);
  };
  return (
    <div className="EmailForm">
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Header>שינוי דואר אלקטרוני</Card.Header>
        <Card.Body>
          <Card.Text>
            <form onSubmit={e => onSubmitEmail(e)} className="resetEmailForm">
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Col sm="10">
                  <Form.Control
                    type="text"
                    name="Email"
                    value={Email}
                    onChange={e => onChange(e)}
                    placeholder="דואר אלקטרוני חדש"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Col sm="10">
                  <Form.Control
                    type="text"
                    name="reEmail"
                    value={reEmail}
                    onChange={e => onChange(e)}
                    placeholder="אימות דואר אלקטרוני"
                  />
                </Col>
              </Form.Group>
              <div className="mailbtn">
                <Button
                  id="buttonEmail"
                  variant="outline-success"
                  type="submit"
                >
                  שנה דואר אלקטרוני
                </Button>
                {successResetEmail || errorResetEmail ? (
                  <div className="UserSettingsEmailAlerts">
                    <Alert />
                  </div>
                ) : null}
              </div>
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
const mapStateToProps = state => ({
  user: state.authReducer.user,
  successResetEmail: state.authReducer.successResetEmail,
  errorResetEmail: state.authReducer.errorResetEmail
});
export default connect(mapStateToProps, { resetEmail, setAlert })(EmailForm);
