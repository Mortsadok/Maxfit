import axios from 'axios';
import { GET_UPDATES } from './typeActions';
import { setAlert } from './alertAction';
export const getUpdates = () => async dispatch => {
  try {
    const res = await axios.get('/api/updates');
    dispatch({
      type: GET_UPDATES,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};
export const changeReadMessage = (_id, readMessage) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({ _id, readMessage });
    await axios.post('/api/updates', body, config);
  } catch (err) {
    console.error(err.message);
  }
};
export const deleteNotification = _id => async dispatch => {
  try {
    await axios.delete(`api/updates/${_id}`);
    dispatch(setAlert('התראה נמחקה בהצלחה', 'success'));
  } catch (err) {
    console.error(err.message);
  }
};
