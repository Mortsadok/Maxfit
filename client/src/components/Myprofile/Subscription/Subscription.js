import React, { useState } from "react";
import "../../../css/Myprofile.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "../../Navbar/Navbar";
// Redux
import { connect } from "react-redux";
import { Nclient } from "../../../actions/NclientAction";
import SecNav from "../SecNav";

const Subscription = ({ Nclient }) => {
  // useState
  const [FormData, SetFormData] = useState({
    firstname: "eden",
    lastname: "elmalich",
    id: "123456789",
    phone: "0543241787",
    Type: "רגיל",
    Time: "חודש",
    Payment: "מזומן",
    Total: 0
  });
  const {
    firstname,
    lastname,
    id,
    phone,
    Type,
    Time,
    Payment,
    Total
  } = FormData;
  const SendClient = e => {
    e.preventDefault();
    Nclient(firstname, lastname, id, phone, Type, Time, Payment, Total);
  };
  return (
    <div className="Subscription">
      <Navbar />
      <SecNav />
      <UnderNAV SendClient={SendClient} />
    </div>
  );
};

const UnderNAV = ({ SendClient }) => (
  <div className="underNAV">
    <div className="Inside-box">
      <div className="Headline">
        <p class="font-weight-light">חידוש מנוי</p>
        <div className="SubscriptionMenu">
          <Card border="secondary" style={{ width: "50rem" }}>
            <Card.Body>
              <Card.Text>
                <Form.Label>סוג מנוי</Form.Label>
                {["radio"].map(type => (
                  <div key={`custom-inline-${type}`} className="mb-3">
                    <Form.Check
                      custom
                      inline
                      label="רגיל"
                      type={type}
                      id={`custom-inline-${type}-1`}
                    />
                    <Form.Check
                      custom
                      inline
                      label="סטודנט"
                      type={type}
                      id={`custom-inline-${type}-2`}
                    />
                  </div>
                ))}
              </Card.Text>
              <Card.Text>
                <Form.Label>תקופת מנוי</Form.Label>
                {["radio"].map(type => (
                  <div key={`custom-inline-${type}`} className="mb-3">
                    <Form.Check
                      custom
                      inline
                      label="חודש"
                      type={type}
                      id={`custom-inline-${type}-3`}
                    />
                    <Form.Check
                      custom
                      inline
                      label="שלושה חודשים"
                      type={type}
                      id={`custom-inline-${type}-4`}
                    />
                    <Form.Check
                      custom
                      inline
                      label="שנה"
                      type={type}
                      id={`custom-inline-${type}-5`}
                    />
                  </div>
                ))}
              </Card.Text>
              <Card.Text>
                <Form.Label>אמצעי תשלום</Form.Label>
                {["radio"].map(type => (
                  <div key={`custom-inline-${type}`} className="mb-3">
                    <Form.Check
                      custom
                      inline
                      label="אשראי"
                      type={type}
                      id={`custom-inline-${type}-6`}
                    />
                    <Form.Check
                      custom
                      inline
                      label="מזומן"
                      type={type}
                      id={`custom-inline-${type}-7`}
                    />
                  </div>
                ))}
              </Card.Text>
            </Card.Body>
            <div className="Sum">סה"כ לתשלום:</div>
            <Card.Footer>
              <Form>
                <Button
                  onClick={e => SendClient(e)}
                  variant="outline-success"
                  type="submit"
                >
                  חדש מנוי
                </Button>
              </Form>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default connect(null, { Nclient })(Subscription);
