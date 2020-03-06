import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Badge, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard as FasAddressCard,
  faMoneyBillAlt
} from '@fortawesome/free-regular-svg-icons';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { Form } from 'react-bootstrap';
import Alert from '../Layout/Alert';
import MediaQuery from 'react-responsive';
import logo from '../../img/logo.png';
// Redux
import { connect } from 'react-redux';
import { register } from '../../actions/authActions';
import { setAlert } from '../../actions/alertAction';

import '../../css/Openning.css';
const Register = ({ register, isAuth, setAlert }) => {
  // useState
  const [typeData, setTypeData] = useState([
    { id: 1, label: 'רגיל', value: 200, selected: false },
    { id: 2, label: 'סטודנט', value: 150, selected: false }
  ]);
  const [timeData, setTimeData] = useState([
    { id: 3, label: 'חודש', value: 30, value1: 1, selected: false },
    { id: 4, label: 'שלושה חודשים', value: 90, value1: 3, selected: false },
    { id: 5, label: 'שנה', value: 365, value1: 12, selected: false }
  ]);
  const [paymentData, setPaymentData] = useState([
    { id: 6, label: 'מזומן', value: 'מזומן', selected: false },
    { id: 7, label: 'אשראי', value: 'אשראי', selected: false }
  ]);
  const [typeName, setTypeName] = useState({});
  const [timeName, setTimeName] = useState({});
  const [calculationData, setCalculation] = useState(0);
  const [calcType, setCalcType] = useState({});
  const [calcTime, setCalcTime] = useState({});
  const [calcPayment, setCalcPayment] = useState({});
  const [redirectDelay, setRedirect] = useState(false);
  const [Data, setData] = useState({
    Email: '',
    Password: '',
    Name: '',
    rePassword: '',
    phone: '',
    clientId: ''
  });
  const { Email, Password, rePassword, Name, phone, clientId } = Data;
  const [typeState, setType] = useState(false);
  const onChange = e => setData({ ...Data, [e.target.name]: e.target.value });
  const onChangeType = (e, id) => {
    if (e.target.value === 'typeData') {
      setTypeData(
        typeData.map(type => {
          if (type.id === id && type.selected === false) {
            setCalcType({ calcType: type.value });
            setTypeName({ typeName: type.value });
            return { ...type, selected: true };
          }
          return { ...type, selected: false };
        })
      );
    }
    if (e.target.value === 'timeData') {
      setTimeData(
        timeData.map(time => {
          if (time.id === id && time.selected === false) {
            setCalcTime({ calcTime: time.value1 });
            setTimeName({ timeName: time.value });

            return { ...time, selected: true };
          }
          return { ...time, selected: false };
        })
      );
    }
    getPrice();
  };
  const onChangePayment = (e, id) => {
    if (e.target.value === 'paymentData') {
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
  const getPrice = () => {
    let Total = 0;
    if (calcType.calcType !== undefined && calcTime.calcTime !== undefined) {
      console.log(calcType.calcType, calcTime.calcTime);
      Total = calcType.calcType * calcTime.calcTime;
    }
    setCalculation(Total);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (Password !== rePassword) {
      setAlert('סיסמאות לא תואמות', 'danger');
    } else {
      register(
        Name,
        Email,
        Password,
        phone,
        clientId,
        typeName.typeName,
        timeName.timeName,
        calcPayment.calcPayment
      );
      resetForm();
      setTimeout(() => {
        setRedirect(true);
      }, 2000);
    }
  };
  const resetForm = () => {
    setData({
      ...Data,
      Email: '',
      Password: '',
      rePassword: '',
      Name: '',
      phone: '',
      clientId: ''
    });
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
  if (isAuth && redirectDelay) {
    return <Redirect to='/Login' />;
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
        <div className='Pages-attributes'>
          <main className='main'>
            <div className='MainPage-container'>
              <Form onSubmit={e => onSubmit(e)}>
                <div style={{ display: 'flex' }}>
                  <Card className='Card-size' id='marginCard'>
                    <Card.Header>הרשמה</Card.Header>
                    <Card.Body>
                      <FontAwesomeIcon
                        className='Main-Icon'
                        icon={FasAddressCard}
                      />
                      <header className='Main-Title'> הרשמה</header>

                      <Form className='Register-Form'>
                        <Row form>
                          <Col md={6}>
                            <FormGroup>
                              <Label>דואר אלקטרוני</Label>
                              <Input
                                type='email'
                                name='Email'
                                value={Email}
                                onChange={e => onChange(e)}
                                placeholder='דואר אלקטרוני'
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label>שם מלא</Label>
                              <Input
                                type='text'
                                name='Name'
                                onChange={e => onChange(e)}
                                value={Name}
                                placeholder='שם מלא'
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md={6}>
                            <FormGroup>
                              <Label>סיסמה</Label>
                              <Input
                                type={typeState ? 'text' : 'password'}
                                name='Password'
                                value={Password}
                                onChange={e => onChange(e)}
                                placeholder='סיסמה'
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label>אימות סיסמה</Label>
                              <Input
                                type={typeState ? 'text' : 'password'}
                                name='rePassword'
                                value={rePassword}
                                onChange={e => onChange(e)}
                                placeholder='אימות סיסמה'
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label>מספר פלאפון</Label>
                              <Input
                                type='text'
                                name='phone'
                                value={phone}
                                onChange={e => onChange(e)}
                                placeholder='מספר פלאפון'
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label> תעודת זהות</Label>
                              <Input
                                type='text'
                                name='clientId'
                                value={clientId}
                                onChange={e => onChange(e)}
                                placeholder='תעודת זהות'
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <div className='Register-Form-margin'></div>
                        <label>הצג סיסמה</label>
                        <input
                          type='checkbox'
                          onClick={() => setType(!typeState)}
                        />
                        <div className='Button-content '>
                          <div className='LoginApp-text'>
                            <Link to='/forgotPass'>שכחת את הסיסמה?</Link>
                          </div>
                          <div className='LoginApp-text'>
                            משתמש קיים?
                            <span className='Link-Color'>
                              <Link id='buttonPosition' to='/Login'>
                                <Button
                                  className='cnt_btn'
                                  variant='outline-dark'
                                >
                                  התחבר
                                </Button>
                              </Link>
                            </span>
                          </div>
                        </div>
                      </Form>
                    </Card.Body>
                  </Card>
                  {/*תשלום*/}
                  <Card className='Card-size' id='marginCard'>
                    <Card.Header>תשלום</Card.Header>
                    <Card.Body>
                      <FontAwesomeIcon
                        className='Main-Icon'
                        icon={faMoneyBillAlt}
                      />
                      <header className='Main-Title'>תשלום</header>

                      <Form className='Register-Form'>
                        <Card style={({ width: '20rem' }, { margin: '10px' })}>
                          <Card.Body>
                            <Card.Title>סוג מנוי</Card.Title>
                            {typeData.map(type => (
                              <span key={type.id} className='mb-3'>
                                <Form.Check
                                  custom
                                  inline
                                  label={type.label}
                                  id={type.id}
                                  type='radio'
                                  value={'typeData'}
                                  checked={type.selected}
                                  onChange={e => onChangeType(e, type.id)}
                                />
                              </span>
                            ))}
                          </Card.Body>
                        </Card>
                        <Card style={({ width: '20rem' }, { margin: '10px' })}>
                          <Card.Body>
                            <Card.Title>תקופת מנוי</Card.Title>

                            {timeData.map(time => (
                              <span key={time.id} className='mb-3'>
                                <Form.Check
                                  custom
                                  inline
                                  label={time.label}
                                  id={time.id}
                                  value={'timeData'}
                                  type='radio'
                                  checked={time.selected}
                                  onChange={e => onChangeType(e, time.id)}
                                />
                              </span>
                            ))}
                          </Card.Body>
                        </Card>
                        <Card style={({ width: '20rem' }, { margin: '10px' })}>
                          <Card.Body>
                            <Card.Title>אמצעי תשלום</Card.Title>

                            {paymentData.map(payment => (
                              <span key={payment.id} className='mb-3'>
                                <Form.Check
                                  custom
                                  inline
                                  label={payment.label}
                                  id={payment.id}
                                  type='radio'
                                  value={'paymentData'}
                                  checked={payment.selected}
                                  onChange={e => onChangePayment(e, payment.id)}
                                />
                              </span>
                            ))}
                          </Card.Body>
                        </Card>
                        <Card
                          style={
                            ({ width: '20rem' },
                            { height: '9rem' },
                            { padding: '0.5rem' })
                          }
                        >
                          <Card.Body>
                            <Card.Title>סה"כ לתשלום:</Card.Title>

                            <div className='Sum'>
                              <h4>
                                {' '}
                                <span>₪{calculationData}</span>{' '}
                              </h4>
                            </div>
                          </Card.Body>
                        </Card>
                      </Form>
                    </Card.Body>
                  </Card>
                </div>
                <Button
                  className='RegisterButton'
                  id='buttonPosition'
                  type='submit'
                  variant='outline-dark'
                >
                  הירשם
                </Button>
                <div className='Alert'>
                  <Alert />
                </div>
              </Form>
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
  <div className='Mobile'>
    <main className='main'>
      <img id='logo' src={logo} alt={logo} />
      <header className='Mobile-Main-Title'>
        <Badge pill variant='dark'>
          הרשמה
        </Badge>
      </header>
      <Card className='Card-size'>
        <Card.Header>הרשמה</Card.Header>
        <Card.Body>
          <FontAwesomeIcon className='Main-Icon' icon={FasAddressCard} />
          <header className='Main-Title'> הרשמה</header>

          <Form className='Register-Form' onSubmit={e => onSubmit(e)}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>דואר אלקטרוני</Label>
                  <Input
                    type='email'
                    name='Email'
                    value={Email}
                    onChange={e => onChange(e)}
                    placeholder='דואר אלקטרוני'
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>סיסמה</Label>
                  <Input
                    type={typeState ? 'text' : 'password'}
                    name='Password'
                    value={Password}
                    onChange={e => onChange(e)}
                    placeholder='סיסמה'
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>שם מלא</Label>
                  <Input
                    type='text'
                    name='Name'
                    onChange={e => onChange(e)}
                    value={Name}
                    placeholder='שם מלא'
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>אימות סיסמה</Label>
                  <Input
                    type={typeState ? 'text' : 'password'}
                    name='rePassword'
                    value={rePassword}
                    onChange={e => onChange(e)}
                    placeholder='אימות סיסמה'
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>מספר פלאפון</Label>
                  <Input
                    type='text'
                    name='phone'
                    value={phone}
                    onChange={e => onChange(e)}
                    placeholder='מספר פלאפון'
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label> תעודת זהות</Label>
                  <Input
                    type='text'
                    name='clientId'
                    value={clientId}
                    onChange={e => onChange(e)}
                    placeholder='תעודת זהות'
                  />
                </FormGroup>
              </Col>
            </Row>
            <div className='Register-Form-margin'></div>
            <div className='Checkbox-Flex'>
              <label>הצג סיסמה</label>
              <input type='checkbox' onClick={() => setType(!typeState)} />
            </div>
            <input type='submit' name='Password' value='הרשמה' />
            <div className='Alert'>
              <Alert />
            </div>
            <div className='Button-content '>
              <div className='LoginApp-text'>
                <Link to='/forgotPass'>שכחת את הסיסמה?</Link>
              </div>
              <div className='LoginApp-text'>
                משתמש קיים?
                <span className='Link-Color'>
                  <Link to='/Login' className='RegistarButton'>
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
