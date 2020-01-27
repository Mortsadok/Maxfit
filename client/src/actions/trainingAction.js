import axios from 'axios';
import { setAlert } from '../actions/alertAction';

export const setTrainingPlan = (
  dayValue,
  trainingType,
  clientId
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ dayValue, trainingType, clientId });
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
