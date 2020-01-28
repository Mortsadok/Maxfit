import axios from 'axios';
import { setAlert } from '../actions/alertAction';

export const setTrainingPlan = (
  typeName,
  buttonValue,
  email
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ typeName, buttonValue, email });
  try {
    await axios.post('api/training', body, config);
    dispatch(setAlert('בקשה לתוכנית אימונים בוצעה', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
