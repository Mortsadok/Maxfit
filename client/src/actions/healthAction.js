import { SET_HEALTH_DETAILS } from '../actions/typeActions';
import { setAlert } from '../actions/alertAction';
import axios from 'axios';
import uuid from 'uuid';
const userId = uuid.v4();
export const setHealthDetails = (
  firstName,
  lastName,
  documentsText,
  readMessage = false,
  subject = 'התקבלה הצהרת בריאות חדשה מאת'
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    firstName,
    lastName,
    documentsText,
    userId,
    readMessage,
    subject
  });
  try {
    const res = await axios.post('api/health', body, config);

    dispatch({
      type: SET_HEALTH_DETAILS,
      payload: res.data
    });
    dispatch(setAlert('הצהרת בריאות נשלחה בהצלחה', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
