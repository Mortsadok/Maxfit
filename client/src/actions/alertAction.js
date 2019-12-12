import { SET_ALERT, REMOVE_ALERT } from "./typeActions";
import uuid from "uuid";
const id = uuid.v4();
export const setAlert = (msg, alertType) => dispatch => {
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
  dispatch({ type: REMOVE_ALERT, payload: id });
};
