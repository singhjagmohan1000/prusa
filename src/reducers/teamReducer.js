import {
  SET_TEAM
} from "../constants";

const initialState = {
  team: []
};
export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEAM:
      return Object.assign({}, state, {
        team: state.team.concat(action.payload)
      });

    default:

      return state;
  }

}
