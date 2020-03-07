import { combineReducers } from 'redux';
import authReducer from './authReducer';
import updatesReducer from './updatesReducer';
import alertReducer from './alertReducer';
export default combineReducers({
  authReducer,
  alertReducer,
  updatesReducer
});
