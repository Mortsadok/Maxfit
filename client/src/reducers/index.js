import { combineReducers } from 'redux';
import authReducer from './authReducer';
import NclientReducer from './NclientReducer';
import updatesReducer from './updatesReducer';
import alertReducer from './alertReducer';
export default combineReducers({
  authReducer,
  alertReducer,
  updatesReducer
});
