import { setAlert } from './alertAction';
import axios from 'axios';
import { ERROR_RESET_EMAIL, SUCCESS_RESET_PASSWORD } from './typeActions';

export const resetEmail = (_id, email) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ _id, email });
  try {
    await axios.post('/api/resetEmail', body, config);
    dispatch({
      type: SUCCESS_RESET_PASSWORD
    });
    dispatch(setAlert('דואר אלקטרוני שונה בהצלחה', 'success'));
  } catch (err) {
    dispatch({
      type: ERROR_RESET_EMAIL,
      payload: true
    });
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
