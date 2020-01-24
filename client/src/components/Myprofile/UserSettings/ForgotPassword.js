import React from "react";
import PropTypes from "prop-types";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "../../../css/Myprofile.css";
import Alert from "../../Layout/Alert";
// Redux
import { connect } from "react-redux";
const ForgotPassword = ({
  onChange,
  onSubmit,
  rePassword,
  password,
  oldPassword,
  successResetPassword,
  errorResetPassword
}) => {
  return (
    <div className="ForgotPassword">
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Header>שינוי סיסמא</Card.Header>
        <Card.Body>
          <Card.Text>
            <form className="ForgotPasswordForm" onSubmit={onSubmit}>
              <Form.Group as={Row}>
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
              <Form.Group as={Row}>
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
              <Form.Group as={Row}>
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
              <Button variant="outline-success" type="submit">
                שנה סיסמא
              </Button>
              {successResetPassword || errorResetPassword ? (
                <div className="alert">
                  <Alert />
                </div>
              ) : null}
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
ForgotPassword.propTypes = {
  successResetPassword: PropTypes.bool,
  errorResetPassword: PropTypes.bool
};
const mapStateToProps = state => ({
  successResetPassword: state.authReducer.successResetPassword,
  errorResetPassword: state.authReducer.errorResetPassword
});
export default connect(mapStateToProps)(ForgotPassword);
