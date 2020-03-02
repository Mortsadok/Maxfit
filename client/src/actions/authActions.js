import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_LOAD,
  AUTH_FAIL,
  LOGIN_FAIL,
  LOGOUT,
  SUCCESS_RESET_PASSWORD,
  ERROR_RESET_PASSWORD
} from './typeActions';
import axios from 'axios';
import { setAlert } from '../actions/alertAction';
import setAuthToken from '../utils/setAuthToken';

export const checkUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: LOGIN_LOAD,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: AUTH_FAIL
    });
  }
};
export const register = (
  Name,
  email,
  password,
  phone,
  clientId,
  Type,
  Time,
  Payment
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    Name,
    email,
    password,
    phone,
    clientId,
    Type,
    Time,
    Payment
  });
  try {
    const res = await axios.post('api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(checkUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};
export const resetPassword = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    await axios.post('/api/forgotPass', body, config);

    dispatch(setAlert('סיסמה שונתה בהצלחה', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
export const settingsResetPassword = (
  email,
  oldPassword,
  password
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, oldPassword, password });
  try {
    await axios.post('/api/settingsForgotPass', body, config);
    dispatch({
      type: SUCCESS_RESET_PASSWORD,
      payload: true
    });
    dispatch(setAlert('סיסמה שונתה בהצלחה', 'success'));
  } catch (err) {
    dispatch({
      type: ERROR_RESET_PASSWORD,
      payload: true
    });
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
export const Logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};
