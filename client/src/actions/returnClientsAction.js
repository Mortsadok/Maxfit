import axios from 'axios';
import { setAlert } from './alertAction';

export const setReturnClient = (
  Name,
  clientId,
  phone,
  Type,
  Time,
  Payment,
  Total = 0,
  subject = 'התראה לחידוש מנוי',
  readMessage = false
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    Name,
    clientId,
    phone,
    Type,
    Time,
    Payment,
    Total,
    subject,
    readMessage
  });
  try {
    await axios.post('api/returnClient', body, config);
    dispatch(setAlert('חידוש מנוי בוצע בהצלחה', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
