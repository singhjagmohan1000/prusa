import {
  SET_CARD_FLIP,
  SET_CARD_CLICK,
  SET_TEAM
} from "../constants";

const initialState = {
  team: [],
  card_flipped: false,
  card_clicked: false,
};
export default function teamReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEAM:
      return Object.assign({}, state, {
        team: state.team.concat(action.payload)
      });

    case SET_CARD_FLIP:
      return Object.assign({}, state, {
        card_flipped: !state.card_flipped
      });

    case SET_CARD_CLICK:
      return Object.assign({}, state, {
        card_clicked: !state.card_clicked
      });

    default:

      return state;
  }

}
