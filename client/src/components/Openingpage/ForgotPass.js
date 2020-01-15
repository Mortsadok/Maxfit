import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import '../../css/Openning.css';
import logo from '../../img/logo.png';
import Alert from '../Layout/Alert';
import MediaQuery from 'react-responsive';
// Redux
import { connect } from 'react-redux';
import { resetPassword } from '../../actions/authActions';
import { setAlert } from '../../actions/alertAction';
const ForgotPass = ({ resetPassword, setAlert }) => {
  // useState
  const [Data, SetData] = useState({
    Email: '',
    Password: '',
    rePassword: ''
  });
  const { Email, Password, rePassword } = Data;
  const [typeState, setType] = useState(false);
  const onChange = e => SetData({ ...Data, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (Password !== rePassword) {
      setAlert('סיסמאות לא תואמות', 'danger');
    }
    resetPassword(Email, Password);
    resetForm();
  };
  const resetForm = () => {
    SetData({ ...Data, Email: '', Password: '', rePassword: '' });
  };

  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileForgotPass
          rePassword={rePassword}
          onChange={onChange}
          onSubmit={onSubmit}
          setType={setType}
          typeState={typeState}
          Email={Email}
          Password={Password}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <div className='Pages-attributes'>
          <main className='main'>
            <div className='MainPage-container'>
              <div className='MainPage-content '>
                <Card className='Card-size'>
                  <Card.Header>איפוס סיסמה</Card.Header>
                  <Card.Body>
                    <FontAwesomeIcon className='Main-Icon' icon={faUnlockAlt} />
                    <header className='Main-Title'>איפוס סיסמה</header>

                    <form className='MainPage-Form' onSubmit={e => onSubmit(e)}>
                      <label>דואר אלקטרוני</label>
                      <input
                        type='text'
                        name='Email'
                        value={Email}
                        onChange={e => onChange(e)}
                        placeholder='דואר אלקטרוני'
                      />
                      <label>סיסמה</label>
                      <input
                        type={typeState ? 'text' : 'password'}
                        name='Password'
                        value={Password}
                        onChange={e => onChange(e)}
                        placeholder='סיסמה'
                      />
                      <label>אימות סיסמה</label>
                      <input
                        type={typeState ? 'text' : 'password'}
                        name='rePassword'
                        value={rePassword}
                        onChange={e => onChange(e)}
                        placeholder='אימות סיסמה'
                      />
                      <label>הצג סיסמאות</label>
                      <input
                        type='checkbox'
                        onClick={() => setType(!typeState)}
                      />

                      <input type='submit' name='Password' value='אפס סיסמה' />
                      <div className='Alert'>
                        <Alert />
                      </div>
                      <div className='LoginApp-text'>
                        משתמש קיים?
                        <span className='Link-Color'>
                          <Link to='/Login' className='RegistarButton'>
                            התחבר
                          </Link>
                        </span>
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
const MobileForgotPass = ({
  onChange,
  rePassword,
  setType,
  typeState,
  Email,
  Password,
  onSubmit
}) => (
  <div className='Mobile'>
    <main className='main'>
      <img id='logo' src={logo} alt={logo} />
      <header className='Mobile-Main-Title'>
        <Badge pill variant='dark'>
          איפוס סיסמה
        </Badge>
      </header>
      <Card className='Card-size'>
        <Card.Header>איפוס סיסמה</Card.Header>
        <Card.Body>
          <FontAwesomeIcon className='Main-Icon' icon={faUnlockAlt} />
          <header className='Main-Title'>איפוס סיסמה</header>

          <form className='MainPage-Form' onSubmit={e => onSubmit(e)}>
            <label>דואר אלקטרוני</label>
            <input
              type='text'
              name='Email'
              value={Email}
              onChange={e => onChange(e)}
              placeholder='דואר אלקטרוני'
            />
            <label>סיסמה</label>
            <input
              type={typeState ? 'text' : 'password'}
              name='Password'
              value={Password}
              onChange={e => onChange(e)}
              placeholder='סיסמה'
            />
            <label>אימות סיסמה</label>
            <input
              type={typeState ? 'text' : 'password'}
              name='rePassword'
              value={rePassword}
              onChange={e => onChange(e)}
              placeholder='אימות סיסמה'
            />
            <div className='Checkbox-Flex'>
              <label>הצג סיסמאות</label>
              <input type='checkbox' onClick={() => setType(!typeState)} />
            </div>
            <input type='submit' name='Password' value='אפס סיסמה' />
            <div className='Alert'>
              <Alert />
            </div>
            <div className='LoginApp-text'>
              משתמש קיים?
              <span className='Link-Color'>
                <Link to='/Login' className='RegistarButton'>
                  התחבר
                </Link>
              </span>
            </div>
          </form>
        </Card.Body>
      </Card>
    </main>
  </div>
);
ForgotPass.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};
export default connect(null, { resetPassword, setAlert })(ForgotPass);
