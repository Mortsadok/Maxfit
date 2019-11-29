import { SET_CLIENTS } from "../actions/typeActions";

const initialState = {
  ClientsList: []
};

const NclientReducer = (state = initialState, action) => {
  const [type, payload] = action;
  switch (type) {
    case SET_CLIENTS:
      return { ...state, ClientsList: payload };
    default:
      return state;
  }
};

export default NclientReducer;
