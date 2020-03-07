import axios from 'axios';
import { setAlert } from './alertAction';

export const setProcessing = (
  Weight,
  Chest,
  frontHand,
  waist,
  Name,
  email,
  readMessage = false,
  subject = 'התקבלו מדדים חדשים מאת'
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    Weight,
    Chest,
    frontHand,
    waist,
    Name,
    email,
    readMessage,
    subject
  });
  try {
    await axios.post('api/processing', body, config);
    dispatch(setAlert('שליחת מדדים בוצעה בהצלחה', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    console.error(err.message);
  }
};
