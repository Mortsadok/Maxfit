import axios from 'axios';
import { setAlert } from './alertAction';

export const Nclient = (
  firstname,
  lastname,
  id,
  phone,
  Type,
  Time,
  Payment,
  Total = 0
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    firstname,
    lastname,
    id,
    phone,
    Type,
    Time,
    Payment,
    Total
  });
  try {
    await axios.post('api/Nclient', body, config);
    dispatch(setAlert('חידוש מנוי בוצע בהצלחה', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
