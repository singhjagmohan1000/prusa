import {
    SET_POLL_QUESTION,
    PUT_POLL_RESULTS,
    GET_POLL_RESULTS
} from "../constants";

const initialState = {
  pollQuestion: {},
  pollResult:{},
  showResult: {},
  selectedOption: ""
};
export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POLL_QUESTION:
      return Object.assign({}, state, {

        pollQuestion: action.payload
      });

    case PUT_POLL_RESULTS:
      return Object.assign({}, state, {
        showResult: action.payload
      });

    case GET_POLL_RESULTS:
      return Object.assign({}, state, {
        pollResult: action.payload
      });

    default:

      return state;
  }

}
