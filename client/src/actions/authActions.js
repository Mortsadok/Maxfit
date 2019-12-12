import { REGISTER_SUCCESS, REGISTER_FAIL } from "./typeActions";
import axios from "axios";

export const register = (Name, email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ Name, email, password });
  try {
    const res = await axios.post("api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
