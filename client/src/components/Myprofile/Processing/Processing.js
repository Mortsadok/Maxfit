import React, { useState, Fragment } from "react";
import "../../../css/Myprofile.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Button, Col } from "react-bootstrap";
import Navbar from "../../Navbar/Navbar";
import MediaQuery from "react-responsive";
import MobileNav from "../../Mobile/MobileNav";
// Redux
import { connect } from "react-redux";
import { setProcessing } from "../../../actions/processingAction";
import SecNav from "../SecNav";

const Processing = ({ setProcessing }) => {
  const [getProccessing, setProcessingData] = useState({
    Weight: "",
    Chest: "",
    frontHand: "",
    backHand: ""
  });
  const { Weight, Chest, frontHand, backHand } = getProccessing;
  const onChange = e => {
    setProcessingData({ getProccessing, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    setProcessing(Weight, Chest, frontHand, backHand);
  };
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileNav />
        <SecNav />
        <MobileProcessing
          Weight={Weight}
          Chest={Chest}
          frontHand={frontHand}
          backHand={backHand}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <div className="Processing">
          <Navbar />
          <SecNav />
          <UnderNAV
            Weight={Weight}
            Chest={Chest}
            frontHand={frontHand}
            backHand={backHand}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
      </MediaQuery>
    </Fragment>
  );
};

const UnderNAV = ({
  Weight,
  Chest,
  frontHand,
  backHand,
  onChange,
  onSubmit
}) => (
  <div className="underNAV">
    <div className="Inside-box">
      <div className="Headline">
        <p className="font-weight-light">עדכון מדדים</p>
        <div className="Processing-form">
          <Card style={{ width: "50rem" }}>
            <Card.Body>
              <Card.Text>
                <Form>
                  <Form.Row>
                    <Col>
                      <Form.Control
                        name="Weight"
                        value={Weight}
                        placeholder="הכנס משקל"
                        onChange={e => onChange(e)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        name="Chest"
                        value={Chest}
                        placeholder="הכנס היקף חזה"
                        onChange={e => onChange(e)}
                      />
                    </Col>
                  </Form.Row>
                </Form>
              </Card.Text>
              <Card.Text>
                <Form>
                  <Form.Row>
                    <Col>
                      <Form.Control
                        name="frontHand"
                        value={frontHand}
                        placeholder="הכנס היקף יד קדמית"
                        onChange={e => onChange(e)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        name="backHand"
                        value={backHand}
                        placeholder="הכנס היקף יד אחורית"
                        onChange={e => onChange(e)}
                      />
                    </Col>
                  </Form.Row>
                </Form>
              </Card.Text>
            </Card.Body>
            <Button variant="outline-success" type="submit">
              שלח מדדים
            </Button>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
const MobileProcessing = ({
  Weight,
  Chest,
  frontHand,
  backHand,
  onChange,
  onSubmit
}) => (
  <div className="Mobile">
    <div className="MobileProcessing">
      <main className="main">
        <UnderNAV
          Weight={Weight}
          Chest={Chest}
          frontHand={frontHand}
          backHand={backHand}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </main>
    </div>
  </div>
);
export default connect(null, { setProcessing })(Processing);
