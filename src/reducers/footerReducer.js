import { SET_RADIO_NAME } from "../constants/index";
import { SET_ADDRESS } from "../constants/index";
const initialState = {
  radio_name: "",
  address: {}
};
export default function footerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_RADIO_NAME:
      return Object.assign({}, state, {
        radio_name: action.radio_name
      });
    case SET_ADDRESS:
      return Object.assign({}, state, {
        address: action.address
      });
    default:
      return state;
  }
}
