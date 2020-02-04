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
