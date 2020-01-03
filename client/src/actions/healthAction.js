import { SET_HEALTH_DETAILS } from "../actions/typeActions";
import axios from "axios";
import uuid from "uuid";
const userId = uuid.v4();
export const setHealthDetails = (
  firstName,
  lastName,
  documentsText
) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ firstName, lastName, documentsText, userId });
  try {
    const res = await axios.post("api/health", body, config);

    dispatch({
      type: SET_HEALTH_DETAILS,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};
