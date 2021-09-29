import { GET_ERROR, CLEAR_ERROR } from "../types";

const initalState = {
  msg: null,
  status: null,
  id: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_ERROR:
      return {
        ...state,
        msg: action.payload.data.error,
        status: action.payload.status,
        id: action.payload.id,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        msg: {},
        state: null,
        show : false,
        id: null,
      };
    default:
      return state;
  }
}
