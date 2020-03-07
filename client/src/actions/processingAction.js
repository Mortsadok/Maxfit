import axios from 'axios';
import { setAlert } from './alertAction';

export const setProcessing = (
  Weight,
  Chest,
  frontHand,
  backHand,
  Name,
  email,
  readMessage = false,
  subject = 'התקבלו מדדים חדשים מאת'
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'applications/json'
    }
  };
  const body = JSON.stringify({
    Weight,
    Chest,
    frontHand,
    backHand,
    Name,
    email,
    readMessage,
    subject
  });
  try {
    await axios.post('/api/processing', body, config);
    dispatch(setAlert('מדדים נשלחו בהצלחה', 'success'));
  } catch (err) {
    console.error(err.message);
  }
};
