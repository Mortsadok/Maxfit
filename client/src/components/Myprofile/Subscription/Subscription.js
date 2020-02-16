import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import "../../../css/Myprofile.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "../../Navbar/Navbar";
import MobileNav from "../../Mobile/MobileNav";
import Alert from "../../Layout/Alert";
import MediaQuery from "react-responsive";
// Redux
import { connect } from "react-redux";
import { Nclient } from "../../../actions/NclientAction";
import SecNav from "../SecNav";

const Subscription = ({ Nclient, user }) => {
  const { phone, Name, id } = user;
  let fullName = [];
  // useState
  if (Name !== undefined) {
    fullName = Name.split(" ");
  }
  const [typeData, setTypeData] = useState([
    { id: 1, label: "רגיל", value: 200, selected: false },
    { id: 2, label: "סטודנט", value: 150, selected: false }
  ]);
  const [timeData, setTimeData] = useState([
    { id: 3, label: "חודש", value: 1, selected: false },
    { id: 4, label: "שלושה חודשים", value: 3, selected: false },
    { id: 5, label: "שנה", value: 12, selected: false }
  ]);
  const [paymentData, setPaymentData] = useState([
    { id: 6, label: "מזומן", value: "מזומן", selected: false },
    { id: 7, label: "אשראי", value: "אשראי", selected: false }
  ]);
  const [typeName, setTypeName] = useState({});
  const [timeName, setTimeName] = useState({});
  const [calculationData, setCalculation] = useState(0);
  const [calcType, setCalcType] = useState({});
  const [calcTime, setCalcTime] = useState({});
  const [calcPayment, setCalcPayment] = useState({});
  const [formData, setFormData] = useState({
    Type: "",
    Time: "",
    Payment: "",
    Total: 0
  });
  const onChange = (e, id) => {
    if (e.target.value === "typeData") {
      setTypeData(
        typeData.map(type => {
          if (type.id === id && type.selected === false) {
            setCalcType({ calcType: type.value });
            setTypeName({ typeName: type.label });
            return { ...type, selected: true };
          }
          return { ...type, selected: false };
        })
      );
    }
    if (e.target.value === "timeData") {
      setTimeData(
        timeData.map(time => {
          if (time.id === id && time.selected === false) {
            setCalcTime({ calcTime: time.value });
            setTimeName({ timeName: time.label });
            return { ...time, selected: true };
          }
          return { ...time, selected: false };
        })
      );
    }
    if (e.target.value === "paymentData") {
      setPaymentData(
        paymentData.map(payment => {
          if (payment.id === id && payment.selected === false) {
            setCalcPayment({ calcPayment: payment.value });
            return { ...payment, selected: true };
          }
          return { ...payment, selected: false };
        })
      );
    }
  };
  const onSubmit = e => {
    let Total = 0;
    e.preventDefault();
    if (calcType.calcType !== undefined && calcTime.calcTime !== undefined) {
      Total = calcType.calcType * calcTime.calcTime;
    }
    setCalculation(Total);
    Nclient(
      fullName[0],
      fullName[1],
      id,
      phone,
      typeName.typeName,
      timeName.timeName,
      calcPayment.calcPayment,
      Total
    );
    ResetForm();
  };
  const ResetForm = () => {
    setTimeout(() => {
      setCalculation(0);
    }, 2000);
    setFormData({
      ...formData,
      firstname: "",
      lastname: "",
      id: "",
      Phone: ""
    });
    setTimeName("");
    setTypeName("");
    setCalcTime("");
    setCalcType("");
    setCalcPayment("");
    setTypeData(
      typeData.map(type => {
        return { ...type, selected: false };
      })
    );
    setTimeData(
      timeData.map(time => {
        return { ...time, selected: false };
      })
    );
    setPaymentData(
      paymentData.map(payment => {
        return { ...payment, selected: false };
      })
    );
  };
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileNav />
        <SecNav />
        <MobileSubscription
          typeData={typeData}
          timeData={timeData}
          onChange={onChange}
          paymentData={paymentData}
          calculationData={calculationData}
          onSubmit={onSubmit}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <div className="Subscription">
          <Navbar />
          <SecNav />
          <UnderNAV
            typeData={typeData}
            timeData={timeData}
            onChange={onChange}
            paymentData={paymentData}
            calculationData={calculationData}
            onSubmit={onSubmit}
          />
        </div>
      </MediaQuery>
    </Fragment>
  );
};

const UnderNAV = ({
  typeData,
  timeData,
  paymentData,
  onChange,
  calculationData,
  onSubmit
}) => (
  <div className="underNAV">
    <div className="Inside-box">
      <div className="Headline">
        <p className="font-weight-light">חידוש מנוי</p>
        <div className="SubscriptionMenu">
          <div className="testCard">
            <Card.Body>
              <div className="CustomSize">
                <Card style={({ width: "20rem" }, { margin: "5px" })}>
                  <Card.Body>
                    <Card.Title>סוג מנוי</Card.Title>
                    {typeData.map(type => (
                      <span key={type.id} className="mb-3">
                        <Form.Check
                          custom
                          inline
                          label={type.label}
                          id={type.id}
                          type="radio"
                          value={"typeData"}
                          checked={type.selected}
                          onChange={e => onChange(e, type.id)}
                        />
                      </span>
                    ))}
                  </Card.Body>
                </Card>

                <Card style={({ width: "20rem" }, { margin: "5px" })}>
                  <Card.Body>
                    <Card.Title>תקופת מנוי</Card.Title>

                    {timeData.map(time => (
                      <span key={time.id} className="mb-3">
                        <Form.Check
                          custom
                          inline
                          label={time.label}
                          id={time.id}
                          value={"timeData"}
                          type="radio"
                          checked={time.selected}
                          onChange={e => onChange(e, time.id)}
                        />
                      </span>
                    ))}
                  </Card.Body>
                </Card>

                <Card style={({ width: "20rem" }, { margin: "5px" })}>
                  <Card.Body>
                    <Card.Title>אמצעי תשלום</Card.Title>

                    {paymentData.map(payment => (
                      <span key={payment.id} className="mb-3">
                        <Form.Check
                          custom
                          inline
                          label={payment.label}
                          id={payment.id}
                          type="radio"
                          value={"paymentData"}
                          checked={payment.selected}
                          onChange={e => onChange(e, payment.id)}
                        />
                      </span>
                    ))}
                  </Card.Body>
                </Card>
              </div>
              <Card
                style={
                  ({ width: "20rem" }, { height: "9rem" }, { padding: "1rem" })
                }
              >
                <Card.Body>
                  <Card.Title>סה"כ לתשלום:</Card.Title>

                  <div className="Sum">
                    <h4>
                      {" "}
                      <span>₪{calculationData}</span>{" "}
                    </h4>
                  </div>
                  <Card.Footer>
                    <Form onSubmit={e => onSubmit(e)}>
                      <Button
                        className="RenewBTN"
                        variant="outline-success"
                        type="submit"
                      >
                        חדש מנוי
                      </Button>
                    </Form>
                    <Alert />
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Card.Body>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const MobileSubscription = ({
  typeData,
  timeData,
  paymentData,
  onChange,
  calculationData,
  onSubmit
}) => (
  <div className="Mobile">
    <div className="MobileSub">
      <main className="main">
        <UnderNAV
          typeData={typeData}
          timeData={timeData}
          onChange={onChange}
          paymentData={paymentData}
          calculationData={calculationData}
          onSubmit={onSubmit}
        />
      </main>
    </div>
  </div>
);
Subscription.propTypes = {
  user: PropTypes.object
};
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(mapStateToProps, { Nclient })(Subscription);
