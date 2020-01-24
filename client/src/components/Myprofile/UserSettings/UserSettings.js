import React, { useState, useEffect } from "react";
import "../../../css/Myprofile.css";
import SecNav from "../SecNav";
import Navbar from "../../Navbar/Navbar";
import EmailForm from "./EmailForm";
import PersonalDetails from "./PersonalDetails";
import ForgotPassword from "./ForgotPassword";
// Redux
import { connect } from "react-redux";
import { settingsResetPassword } from "../../../actions/authActions";
import { setAlert } from "../../../actions/alertAction";

const UserSettings = ({
  user,
  settingsResetPassword,
  setAlert,
  errorResetEmail
}) => {
  const [data, setData] = useState({
    oldPassword: "",
    password: "",
    rePassword: ""
  });
  useEffect(() => {
    console.log(errorResetEmail);
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
  onSubmit,
  passwordData
}) => (
  <div className="underNAV">
    <div className="Inside-box">
      <div className="Headline">
        <p className="font-weight-light">הגדרות</p>
        <div className="Setting-form">
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
const mapStateToProps = state => ({
  user: state.authReducer.user,
  errorResetEmail: state.authReducer.errorResetEmail
});
export default connect(mapStateToProps, {
  settingsResetPassword,
  setAlert
})(UserSettings);
