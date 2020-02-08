import axios from 'axios';
import { GET_UPDATES } from './typeActions';
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
  console.log(_id, readMessage);
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
