import { ADD_ARTICLE } from "../constants/index";

const initialState = {
  articles: []
};
export default function defaultReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {

    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}
