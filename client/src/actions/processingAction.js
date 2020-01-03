import { SET_PROCESSING } from "../actions/typeActions";

export const setProcessing = (
  Weight,
  Chest,
  frontHand,
  backHand
) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "applications/json"
    }
  };
  const body = JSON.stringify({ Weight, Chest, frontHand, backHand });
  try {
  } catch (err) {
    console.error(err.message);
  }
};
