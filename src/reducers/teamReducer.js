import { SET_TEAM } from "../constants/index";

const initialState = {
  team: []
};
export default function teamReducer(state = initialState, action) {
  if (action.type === SET_TEAM) {

    return Object.assign({}, state, {
      team: state.team.concat(action.payload)
    });
  }
  return state;
}
