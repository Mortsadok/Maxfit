import { GET_UPDATES } from '../actions/typeActions';

const initialState = {
  get_updates: []
};

const updatesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_UPDATES:
      return { ...state, get_updates: payload };
    default:
      return state;
  }
};
export default updatesReducer;
