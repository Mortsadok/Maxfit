import { SET_CLIENTS } from "./typeActions";
import axios from "axios";

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
      "Content-Type": "application/json"
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
    await axios.post("api/Nclient", body, config);
  } catch (err) {
    console.error(err.message);
  }
};
