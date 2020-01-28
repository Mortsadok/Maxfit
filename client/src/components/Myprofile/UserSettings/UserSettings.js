import React, { useState, useEffect, Fragment } from 'react';
import '../../../css/Myprofile.css';
import SecNav from '../SecNav';
import Navbar from '../../Navbar/Navbar';
import EmailForm from './EmailForm';
import PersonalDetails from './PersonalDetails';
import ForgotPassword from './ForgotPassword';
import MediaQuery from 'react-responsive';
import MobileNav from '../../Mobile/MobileNav';
// Redux
import { connect } from 'react-redux';
import { settingsResetPassword } from '../../../actions/authActions';
import { setAlert } from '../../../actions/alertAction';

const UserSettings = ({ user, settingsResetPassword, setAlert }) => {
  const [data, setData] = useState({
    oldPassword: '',
    password: '',
    rePassword: ''
  });
  const { password, rePassword, oldPassword } = data;
  const { Name, email } = user;
  const onChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (password !== rePassword) {
      setAlert('סיסמאות לא תואמות', 'danger');
    }
    settingsResetPassword(email, oldPassword, password);
    resetForm();
  };
  const resetForm = () => {
    setData({ ...data, oldPassword: '', password: '', rePassword: '' });
  };
  return (
    <Fragment>
      <MediaQuery maxDeviceWidth={1024}>
        <MobileNav />
        <SecNav />
        <MobileUserSettings
          Name={Name}
          email={email}
          password={password}
          rePassword={rePassword}
          oldPassword={oldPassword}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280}>
        <div className='UserSettings'>
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
      </MediaQuery>
    </Fragment>
  );
};

const UnderNAV = ({
  Name,
  email,
  password,
  rePassword,
  onChange,
  oldPassword,
  onSubmit,
  passwordData
}) => (
  <div className='underNAV'>
    <div className='Inside-box'>
      <div className='Headline'>
        <p className='font-weight-light'>הגדרות</p>
        <div className='Setting-form'>
          <PersonalDetails Name={Name} email={email} />
          <ForgotPassword
            onSubmit={onSubmit}
            oldPassword={oldPassword}
            onChange={onChange}
            rePassword={rePassword}
            password={password}
            passwordData={passwordData}
          />
          <EmailForm />
        </div>
      </div>
    </div>
  </div>
);
const MobileUserSettings = ({
  Name,
  email,
  password,
  rePassword,
  onChange,
  oldPassword,
  onSubmit,
  passwordData
}) => (
  <div className='Mobile'>
    <div className='MobileSettings'>
      <main className='main'>
        <UnderNAV
          Name={Name}
          email={email}
          password={password}
          rePassword={rePassword}
          onChange={onChange}
          oldPassword={oldPassword}
          onSubmit={onSubmit}
          passwordData={passwordData}
        />
      </main>
    </div>
  </div>
);
const mapStateToProps = state => ({
  user: state.authReducer.user,
  errorResetEmail: state.authReducer.errorResetEmail
});
export default connect(mapStateToProps, {
  settingsResetPassword,
  setAlert
})(UserSettings);
