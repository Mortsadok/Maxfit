import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_FAIL,
  LOGIN_LOAD,
  LOGOUT,
  SUCCESS_RESET_PASSWORD,
  ERROR_RESET_PASSWORD,
  SUCCESS_RESET_EMAIL,
  ERROR_RESET_EMAIL
} from '../actions/typeActions';

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: null,
  loading: true,
  user: {},
  successResetPassword: false,
  errorResetPassword: false,
  successResetEmail: false,
  errorResetEmail: false
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_LOAD:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuth: true,
        loading: false
      };
    case AUTH_FAIL:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,

        token: null,
        isAuth: false,
        loading: false
      };
    case SUCCESS_RESET_PASSWORD:
      return {
        ...state,
        successResetPassword: payload,
        successResetEmail: false
      };
    case ERROR_RESET_PASSWORD:
      return { ...state, errorResetPassword: payload, errorResetEmail: false };
    case SUCCESS_RESET_EMAIL:
      return {
        ...state,
        successResetEmail: payload,
        successResetPassword: false
      };
    case ERROR_RESET_EMAIL:
      return { ...state, errorResetEmail: payload, errorResetPassword: false };
    default:
      return state;
  }
};
export default authReducer;
